import { mkdtemp, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const buildDirectory = await mkdtemp(join(tmpdir(), "mentis-ai-tests-"));
const compiler = join(root, "node_modules", "typescript", "bin", "tsc");
const sourceFiles = [
  "src/lib/site.ts",
  "src/lib/academy-assistant.ts",
  "src/lib/whatsapp.ts",
].map((file) => join(root, file));

try {
  const compile = spawnSync(
    process.execPath,
    [
      compiler,
      "--target",
      "ES2022",
      "--module",
      "CommonJS",
      "--moduleResolution",
      "Node",
      "--strict",
      "--esModuleInterop",
      "--skipLibCheck",
      "--types",
      "node",
      "--rootDir",
      root,
      "--outDir",
      buildDirectory,
      ...sourceFiles,
    ],
    { cwd: root, stdio: "inherit" },
  );

  if (compile.error) throw compile.error;
  if (compile.status !== 0) {
    process.exitCode = compile.status ?? 1;
  } else {
    const run = spawnSync(
      process.execPath,
      ["--test", join(root, "tests", "site-behavior.test.mjs")],
      {
        cwd: root,
        env: {
          ...process.env,
          MENTIS_TEST_BUILD_DIR: buildDirectory,
          NEXT_PUBLIC_SITE_URL: "",
        },
        stdio: "inherit",
      },
    );

    if (run.error) throw run.error;
    process.exitCode = run.status ?? 1;
  }
} finally {
  await rm(buildDirectory, { recursive: true, force: true });
}
