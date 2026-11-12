# ShopSphere

This repository is the original combined application chart. The running platform no longer deploys it as one release.

- Platform: [shopsphere-infra](https://github.com/Johnson9393/shopsphere-infra)
- One repository per service, each with its own chart and CI
- Desired state: [shopsphere-gitops](https://github.com/Johnson9393/shopsphere-gitops)
- Argo CD installs the per-service charts. The database bootstrap in `helm/shopsphere` remains the reference for how each environment's databases and logins are created.


# shopsphere
ShopSphere application, Helm, and GitHub Actions
