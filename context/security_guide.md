# Mentis AI — Security Guide

## 1. Purpose

This document defines the security standards that must be followed when developing, testing, deploying, and maintaining the Mentis AI website and its supporting services.

Every contributor and AI coding agent must follow these guidelines. Security must be considered throughout development, not added as an afterthought.

The primary objectives are to:
- Protect user information, business data, credentials, and intellectual property.
- Prevent unauthorized access, data leaks, and common web vulnerabilities.
- Maintain secure integrations, APIs, and deployment environments.
- Ensure that all changes are safe to deploy to production.

## 2. Core Principles

### 2.1 Security by Design
Security requirements must be considered before implementing features, selecting dependencies, or connecting external services.

### 2.2 Least Privilege
Users, services, integrations, and AI agents must receive only the permissions necessary to perform their tasks.

### 2.3 Defense in Depth
Never rely on a single security control. Combine appropriate validation, authorization, secure configuration, monitoring, and infrastructure protections.

### 2.4 Fail Securely
When authentication, authorization, validation, or an external security dependency fails, the system must deny access or fail safely rather than expose protected information.

### 2.5 Minimize Attack Surface
Avoid unnecessary endpoints, packages, permissions, services, public files, and exposed configuration.

### 2.6 Secure Defaults
New features must be secure by default. Debugging tools, test credentials, permissive CORS settings, and development-only endpoints must never be enabled in production without an explicit, justified requirement.

### 2.7 Verify Before Claiming
AI coding agents must not claim that a feature is secure merely because it compiles or passes basic tests. Security-related changes must be supported by appropriate inspection and testing.

## 3. Authentication and Authorization

### 3.1 Authentication
- Use a reputable authentication provider or a well-maintained authentication library if authentication becomes necessary.
- Never implement custom password storage or cryptography when established solutions are available.
- Passwords must never be stored in plaintext or reversibly encrypted.
- Authentication cookies must use appropriate `HttpOnly`, `Secure`, and `SameSite` attributes.
- Protect authentication flows against brute-force attacks, credential stuffing, session fixation, and account enumeration where applicable.
- Require multi-factor authentication for privileged accounts wherever supported.

### 3.2 Authorization
- Authentication does not automatically grant permission to access every resource.
- Enforce authorization on the server for every protected operation.
- Never rely on frontend visibility, disabled buttons, or client-side route guards as the sole access control.
- Use role-based or resource-based permissions where appropriate.
- Prevent users from accessing another user's data by modifying resource identifiers.
- Administrative functionality must be explicitly protected.

### 3.3 Session Management
- Use secure, unpredictable session identifiers.
- Invalidate sessions on logout and when appropriate after credential changes.
- Avoid storing authentication tokens in browser local storage when a safer supported session mechanism is available.
- Never include session tokens in URLs, logs, screenshots, or error messages.

### 3.4 Public Website Policy
If the website is a public marketing website without user accounts, do not introduce authentication infrastructure unnecessarily. Any future dashboard, client portal, or administrative interface must be reviewed separately.

## 4. Environment and Secrets

### 4.1 Secret Management
- Never hardcode API keys, passwords, private tokens, database credentials, or signing secrets in source code.
- Never commit `.env` files containing real credentials.
- Maintain an `.env.example` containing variable names and safe placeholder values only.
- Use Vercel environment variables or an appropriate secrets manager for deployment secrets.
- Use separate credentials for development, preview, testing, and production wherever applicable.
- Rotate any credential that is accidentally exposed.

### 4.2 Frontend and Backend Boundaries
- Treat all code shipped to the browser as public.
- Variables prefixed with `NEXT_PUBLIC_`, `VITE_`, or equivalent public prefixes must never contain secrets.
- Private API keys and privileged tokens must remain in server-side environments.
- Never expose deployment tokens, private repository credentials, or service-role keys through frontend code.

### 4.3 Environment Configuration
- Validate required environment variables at application startup or build time as appropriate.
- Fail clearly when required configuration is missing.
- Never use production credentials in local development or automated tests unnecessarily.
- Disable detailed debug output and development-only features in production.

## 5. Data Protection

### 5.1 Data Minimization
Collect only information necessary for a clearly defined business purpose. The marketing website should not collect sensitive personal information without a documented requirement.

### 5.2 Data Transmission and Storage
- Use HTTPS for production traffic and external integrations.
- Use secure storage mechanisms for any retained user information.
- Do not store sensitive information in browser storage unless a justified, reviewed requirement exists.
- Avoid retaining form submissions and personal data longer than necessary.

### 5.3 Logging and Error Handling
- Never log passwords, access tokens, session cookies, private keys, or unnecessary personal information.
- Ensure production error messages do not expose internal paths, stack traces, secrets, database details, or implementation internals.
- Use generic client-facing errors and appropriately detailed, sanitized server-side logs.

### 5.4 User Consent and Privacy
- Forms must clearly communicate why information is collected.
- Include an accurate privacy policy when personal information is collected.
- Use appropriate consent and data-handling practices for applicable privacy laws.
- Do not send user data to analytics, advertising, or AI services without a legitimate, documented purpose and appropriate disclosures.

## 6. API and Backend Security

### 6.1 Input Validation
- Treat all client input as untrusted.
- Validate request bodies, query parameters, URL parameters, headers, and uploaded files on the server.
- Use established validation libraries and explicit schemas where appropriate.
- Enforce sensible limits on input lengths, request sizes, and accepted file types.

### 6.2 Injection Prevention
- Use parameterized database queries or safe ORM methods.
- Never construct SQL queries by concatenating untrusted input.
- Avoid unsafe shell execution and dynamic code evaluation.
- Escape or sanitize untrusted content before rendering it in an HTML context.

### 6.3 API Access and Abuse Prevention
- Protect privileged endpoints with appropriate authentication and authorization.
- Implement rate limiting for forms, authentication endpoints, and resource-intensive operations where applicable.
- Restrict Cross-Origin Resource Sharing (CORS) to trusted origins when cross-origin access is required.
- Configure appropriate security headers, including Content Security Policy where feasible, and protection against framing and content-type sniffing.
- Use CSRF protection for state-changing requests when the authentication mechanism requires it.
- Apply sensible timeouts and request limits to external integrations.

### 6.4 Webhooks and Integrations
- Verify webhook signatures before processing events.
- Validate the origin and integrity of external data where supported.
- Handle retries and duplicate events safely.
- Never trust a success response or client-submitted payment status without server-side verification.
- Do not expose internal administrative operations through public endpoints.

### 6.5 File Uploads
If uploads are introduced, validate file size, file type, and content. Store uploaded files outside executable application paths, use safe filenames, and restrict access according to the use case.

### 6.6 Dependency on External Services
External services may fail, return malformed data, or become unavailable. Handle errors safely, apply timeouts, and avoid exposing internal credentials or implementation details in responses.

## 7. Dependencies and Infrastructure

### 7.1 Dependency Management
- Prefer established, maintained packages with a clear purpose.
- Avoid unnecessary dependencies and duplicate libraries.
- Commit the appropriate lockfile and use reproducible installation commands.
- Review dependency security advisories and address relevant vulnerabilities promptly.
- Do not install packages suggested by an AI agent without checking their identity, maintenance status, and necessity.

### 7.2 Repository Security
- Never commit secrets, private keys, production data, or unnecessary personal information.
- Keep `.gitignore` updated for local environment files, build artifacts, logs, and temporary files.
- Review staged changes before committing.
- Do not overwrite or delete existing work without understanding its purpose and confirming authorization.

### 7.3 Vercel and Production Infrastructure
- Keep production and preview environment variables appropriately separated.
- Apply least-privilege permissions to deployment integrations and tokens.
- Restrict production deployment permissions to authorized contributors.
- Review deployment settings, custom domains, and environment configuration before launch.
- Do not expose source maps or diagnostic endpoints in ways that disclose sensitive information.
- Use HTTPS and ensure production builds do not include development-only services or secrets.

### 7.4 CI/CD and Testing
- Run linting, type checks, tests, and production builds before deployment.
- Add automated dependency and secret scanning where practical.
- Never bypass security checks merely to make a deployment pass.
- Review the changes introduced by automated agents before merging or deploying them.

## 8. Incident Reporting

### 8.1 What Constitutes an Incident?
Examples include:
- Exposed API keys, passwords, or deployment tokens.
- Unauthorized access to an account, service, or repository.
- Unexpected disclosure of user or business information.
- A compromised dependency, deployment, or third-party integration.
- Suspicious activity involving public forms, endpoints, or administrative functionality.

### 8.2 Immediate Response
1. Stop the affected operation or deployment if doing so will reduce ongoing risk.
2. Revoke or rotate exposed credentials immediately.
3. Restrict affected access and isolate compromised systems where appropriate.
4. Preserve relevant logs and evidence without sharing secrets publicly.
5. Notify the responsible project owner through a private, authorized communication channel.
6. Investigate the cause, determine the impact, and implement corrective measures.
7. Restore normal operation only after appropriate verification.

### 8.3 Reporting Rules
- Never publish secrets or incident details containing sensitive information in public issues or pull requests.
- Do not conceal a security issue because it was introduced by an AI agent.
- Do not claim an incident is resolved until remediation has been verified.
- Document the cause, impact, actions taken, and preventive measures.

## Final Rule

Security requirements apply to every contributor and AI coding agent working on Mentis AI.

If a change introduces uncertainty about authentication, secrets, user data, permissions, or production safety, stop and investigate before proceeding. Do not trade security for speed.