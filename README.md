# ShopSphere

This repository is the original combined application. It is not deployed.

The running platform is split by service:

- Platform: [shopsphere-infra](https://github.com/Johnson9393/shopsphere-infra)
- Product, user, cart, order, payment, notification, and the React frontend, each in its own repository
- Desired state: [shopsphere-gitops](https://github.com/Johnson9393/shopsphere-gitops)

Amazon API Gateway is the public API edge. The services are Java 21 and Spring Boot. The frontend is React. Events are Avro on MSK.
