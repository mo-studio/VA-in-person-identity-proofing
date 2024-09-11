> [!IMPORTANT]  
> This repository is no longer being actively worked on as of Aug 17, 2024 since our contract with the VA has ended. It is fairly easy to start up the vercel server since this repo is connected to vercel and we can re-start another deployment if there are any future code changes. For more information please contact the repository owners. We will update if the need for this ever resurfaces. 

# In Person Identity Proofing
Veterans Affairs (VA) continues to offer more digital services to ensure access and security for all Veterans. In order to achieve increased security measures for VA.gov, Veterans will need to  create modern credentials, such as Login.gov, which require verification of one’s identity. However, the process of remote identity verification can be very confusing and frustrating, and it has a high chance of failure. Through discovery research and literature review, Login.gov Adoption has identified that in-person support is not only desired by Veterans, but it is needed to help many subpopulations of Veterans to verify their identity successfully. For example, Veterans that are not comfortable with processes involving photographing and uploading a digital image. Currently, VA has sites set up so that Veterans may verify their identity for specific services, such as MHV premium. However, the process of identity verification has been found to be inconsistent and unregulated across sites. Login.gov has developed identity proofing services at United States Postal Service sites which are made available to those who have failed remote proofing.
In order to support Veterans who may be unable to verify their identity remotely, Office of the Chief Technology Officer has tasked the Login.gov Adoption team with creating a custom service that meets NIST Identity Assurance Level 2 (IAL2) guidelines, 800-63, and enables Veterans to complete identity verification in person at VA facilities. The service consists of an In-Person Identity Proofing custom application and an appointment at a VAMC with a designated proofing agent. The custom application is a new product that will allow proofing agents to validate proofing documents and use the Identity Toolkit to help Veterans complete identity verification at VA sites. Login.gov Adoption is a team within OCTO Identity and is working in partnership with Login.gov. 

Here is our [Product Brief](https://docs.google.com/document/d/1cQsrpAyydrElCxMk54TbRYmYuyyeJWx98KRWDUbshow/edit#heading=h.e0941y4fa3eg) for more info.

## Features

- Framework for server-side rendered, static, or hybrid React applications
- TypeScript and React testing tools
- U.S. Web Design System for themeable styling and a set of common components
- Uses Next.js framework v13.5.6 as a framework for client side rendering
- Type checking, linting, and code formatting tools
- Storybook for a frontend workshop environment

## Repo structure

```text
├── .github             # GitHub workflows and repo templates
├── app                 # Web application
├── docs                # Project docs and decision records
```

## Overview

- Current web application encompasses a Veteran Intake and a Proofing Agent Flow which can be accessed via a screen
- Veteran Intake flow has 4 screens (if curious you can access here - https://va-in-person-identity-proofing-my-team-223685c3.vercel.app/intake/1-home)
- Proofing Agent flow enables a MHV coordinator to prove a veterans identity to achieve IAL2 compliance with instructions (see here https://va-in-person-identity-proofing-my-team-223685c3.vercel.app/intake/1-home) 


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [External Integrations](#external-integrations)
- [Contributing](#contributing)
- [License](#license)

## Installation
Clone the github repository:
   ```bash
   git clone git@github.com:department-of-veterans-affairs/va-in-person-identity-proofing.git
   ```
#### Native

From the `app/` directory:

1. Install dependencies
   ```bash
   npm install
   ```
2. Optionally, disable [telemetry data collection](https://nextjs.org/telemetry)
   ```bash
   npx next telemetry disable
   ```
3. Run the local development server
   ```bash
   npm run dev
   ```
4. Navigate to [localhost:3000](http://localhost:3000) to view the application

#### Run Jest Unit Tests
   ```bash
   npm run test 
   ```
## Usage

Localhost:3000 should lead you to this screen 
![image](https://github.com/department-of-veterans-affairs/va-in-person-identity-proofing/assets/137448668/6d188983-f471-416a-83ef-c35b44e9c37f)


## Features

- Allows a veteran to see what entails in getting an IAL2 compliant account, select a site and recieve a confirmation number and instructions to go the VA site
- Allows a Proofing Agent to retrieve the proffee's information via the case number and gather information to ensure that they reach IAL2 compliance
- Check our [QA log](https://docs.google.com/spreadsheets/d/18v5DcUe0J5GlFZrXR219dvPCij4x-0_kdUGJ6zdzG4A/edit#gid=1180539079)
- Check our [Database Diagram] (https://lucid.app/lucidchart/d59e0de9-7c74-4df7-8cf2-2683a22a2e2b/edit?beaconFlowId=348E8767A4F02D66&invitationId=inv_5f233044-ccde-4c15-9ec3-3214ff8be07a&page=0_0#)

## External Integrations

- Google Maps API
- Jest
- LHDI
- NextAuth/ Login.giv

## Contributing

This is still a WIP so feel free to reach out to anyone actively contributing to this amongst the Github members and we are happy to chat

## License

TBD
