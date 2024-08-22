export const responseObj = {
    "data": {
        "outputOne": "## **Product Scope**\n\nThe email management tool aims to help users better organize their email inboxes by connecting multiple email accounts, tagging incoming emails, and enabling contextual search. The goal is to simplify email management and improve efficiency for both free-tier and paid-tier users.\n\n## **User Classes and Characteristics**\n\n1. **Free-Tier Users:** \n   - Can add up to 3 email accounts.\n   - Limited tagging and search functionalities.\n   - Limited integration options.\n   \n2. **Paid-Tier Users:**\n   - Can add more than 3 email accounts.\n   - Access to advanced tagging and contextual search functionalities.\n   - More integration options with other third-party tools and services.\n   - Enhanced customer support.\n\n## **Design and Implementation Constraints**\n\n- Must adhere to email service providers’ privacy and security regulations.\n- Must work seamlessly with most major email providers (Gmail, Outlook, Yahoo, etc.).\n- Constraints on data storage and server performance due to large volumes of email data.\n- Must be implemented using robust security measures to protect sensitive email data.\n- Integration with AI models must be efficient enough for real-time search and tagging.\n\n## **Assumptions and Dependencies**\n\n- Assumed that email providers' APIs (Gmail, Outlook, Yahoo, etc.) are reliable and provide necessary functionalities.\n- Assumed dependence on third-party AI services for contextual search and tagging.\n- Dependence on cloud services for data storage and computational needs.\n\n# **External Interface Requirements**\n\n## **User Interfaces**\n\n### Desktop Interface\n\n- A clean and user-friendly dashboard presenting a summary of all connected email accounts.\n- Navigation options allowing users to access tagging settings, search functionalities, and account settings.\n- A real-time notification system to alert users of new emails and tags.\n\n### Mobile Interface\n\n- Streamlined interface for connecting and managing multiple email accounts.\n- Mobile-optimized navigation for accessing tagging settings, search functionalities, and account settings.\n- Push notifications to keep users informed of new emails and tags on-the-go.\n\n## **Software Interfaces**\n\n- API connections to major email service providers (Gmail, Outlook, Yahoo, etc.).\n- AI services for email tagging and contextual search (natural language processing, machine learning models, etc.).\n- Cloud storage solutions for storing email metadata and tag information.\n\n# **System Features**\n\n## **Feature 1. User Registration and Authentication**\n\n- **Description and Priority:** High-priority feature allowing users to register and log in securely.\n- **Stimulus/Response Sequences:**\n    - Sign up via email or third-party accounts (Google, Facebook).\n    - Confirmation email to activate the account.\n    - Secured login portal with password authentication.\n    - Two-factor authentication for enhanced security.\n- **Functional Requirements:**\n    - Registration and login interfaces.\n    - Data validation and storage of user credentials.\n    - Confirmation email functionality.\n    - Secure authentication protocols.\n\n## **Feature 2. Connect Email Accounts**\n\n- **Description and Priority:** High-priority feature allowing users to connect multiple email accounts.\n- **Stimulus/Response Sequences:**\n    - User logs in and navigates to the \"Add Email Account\" section.\n    - User selects an email service provider and enters credentials.\n    - System retrieves emails and initial metadata.\n- **Functional Requirements:**\n    - Interface for adding email accounts.\n    - Validation and secure storage of email credentials.\n    - Retrieval of emails and initial tagging setup.\n\n## **Feature 3. Email Tagging**\n\n- **Description and Priority:** High-priority feature for automatically tagging incoming emails.\n- **Stimulus/Response Sequences:**\n    - System monitors incoming emails.\n    - AI algorithm analyzes email content and applies tags.\n    - User can manually adjust tags as needed.\n- **Functional Requirements:**\n    - Continuous monitoring of email inboxes.\n    - AI algorithms for tagging.\n    - Interface for viewing and adjusting tags.\n\n## **Feature 4. Contextual Search**\n\n- **Description and Priority:** High-priority feature allowing users to perform contextual searches.\n- **Stimulus/Response Sequences:**\n    - User enters search query in the search bar.\n    - AI algorithm analyzes query and returns contextually relevant results.\n    - User can refine search results using filters.\n- **Functional Requirements:**\n    - Search interface.\n    - AI algorithms for contextual search.\n    - Filter options for refining search results.\n\n## **Feature 5. Subscription Management**\n\n- **Description and Priority:** High-priority feature for managing free and paid subscriptions.\n- **Stimulus/Response Sequences:**\n    - User navigates to the subscription management section.\n    - User selects a subscription plan (free or paid).\n    - System processes payment and updates account features.\n- **Functional Requirements:**\n    - Interface for selecting and managing subscriptions.\n    - Payment processing system.\n    - Backend system for enabling/disabling features based on subscription plan.\n\n## **Feature 6. Email Integrations and Extensions**\n\n- **Description and Priority:** Medium-priority feature for additional email integrations.\n- **Stimulus/Response Sequences:**\n    - User navigates to the integrations or extensions section.\n    - User selects the desired integration or extension.\n    - System connects to the chosen service and sets up integration.\n- **Functional Requirements:**\n    - Interface for selecting and managing integrations.\n    - Secure API connections to third-party services.\n    - Configuration options for customizing integrations.\n\n## **Other Nonfunctional Requirements**\n\n### **Performance Requirements**\n\n- The system must efficiently handle the real-time monitoring and tagging of emails.\n- Search and tagging functionalities must be responsive and quick.\n\n### **Security Requirements**\n\n- Ensuring strong encryption for all stored emails and user credentials.\n- Two-factor authentication for enhanced account security.\n- Regular security audits and compliance checks.\n\n### **Integration Requirements**\n\n#### AI Integration\n\n- AI models for natural language processing and machine learning to tag emails and perform contextual searches.\n- Regular updates to AI models to improve accuracy and efficiency.\n\n#### Cloud Storage Integration\n\n- Secure cloud storage solutions for storing email metadata and tags.\n- Regular backups and failover mechanisms to ensure data integrity and availability.\n\n## **Monitoring and Logging Requirements**\n\n- Continuous monitoring of the system for performance and security issues.\n- Detailed logging of all user activities and system events for troubleshooting and auditing purposes.\n\nBy fulfilling these requirements, the email management tool aims to offer users a seamless and efficient experience in managing their email accounts, improving productivity through automated tagging and contextual search.",
        "outputTwo": "1. **Login and Registration Screen**\n   - User-friendly interface for registration and login with email or third-party accounts.\n   - Password authentication and confirmation email for account activation.\n   - Two-factor authentication.\n\n2. **Dashboard Screen**\n   - Overview of connected email accounts.\n   - Navigation options for tagging settings, search functionalities, and account settings.\n   - Real-time notification system.\n\n3. **Add Email Account Screen**\n   - User interface for adding multiple email accounts.\n   - Support for major email service providers (Gmail, Outlook, Yahoo, etc.).\n   - Secure storage and retrieval of emails.\n\n4. **Email Tagging Screen**\n   - List of incoming emails with automatic tags applied.\n   - Options to manually adjust tags as needed.\n   - Continuous monitoring and tagging of new emails.\n\n5. **Search Screen**\n   - Search bar for entering queries.\n   - Display of contextually relevant email search results.\n   - Filter options to refine search results.\n\n6. **Subscription Management Screen**\n   - Options for selecting and managing free or paid subscriptions.\n   - Interface for upgrading subscription tiers.\n   - Payment processing and feature updates.\n\n7. **Integrations and Extensions Screen**\n   - List of available email integrations and extensions.\n   - Options to connect and configure third-party services.\n   - Settings to customize integration features.\n\n8. **Notifications and Alerts Screen**\n   - Real-time alerts for new emails and tagging events.\n   - Configuration settings for push notifications on mobile devices.\n   - Summary of recent activities and updates.\n\n9. **Settings Screen**\n   - User preferences and account management options.\n   - Privacy and security settings.\n   - Backup and restore options.\n\n10. **Help and Support Screen**\n    - Access to tutorials and FAQs.\n    - Contact options for customer support.\n    - Feedback form for user suggestions and issues.",
        "usage": {
            "prompt_tokens": 3289,
            "completion_tokens": 1695,
            "total_tokens": 4984
        }
    }
}

export const markdown = `
# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code



## Inline code

This web site is using "markedjs/marked".
`;

export const testHtml = `
<h1><strong>Product Scope</strong></h1>

<img src="src/assets/img.jpg"/>


<p>Email Manager is a web application designed to help users manage multiple email inboxes more efficiently. The primary goal of the application is to connect different email accounts, scan incoming emails for automated tagging, and provide an advanced search mechanism to locate emails by context.</p>

<h2><strong>Features</strong></h2>

<ul>
    <li>The ability to connect multiple email accounts.</li>
    <li>Automated tagging of incoming emails for better categorization.</li>
    <li>An advanced search mechanism that allows users to search emails by context, not just by exact match.</li>
    <li>A free tier that supports up to 3 connected email accounts.</li>
    <li>A paid tier that supports a higher number of connected email accounts.</li>
</ul>

<h2><strong>References</strong></h2>

<ul>
    <li>Gmail API documentation</li>
    <li>Outlook API documentation</li>
</ul>

<h2><strong>User Classes and Characteristics</strong></h2>

<p>Based on an analysis, we have identified two primary user classes:</p>

<ol>
    <li><strong>Free Users:</strong> These users have access to the basic features of the application, which include connecting up to 3 email accounts, automated tagging, and contextual search.</li>
    <li><strong>Premium Users:</strong> These users have access to additional features such as connecting more than 3 email accounts, advanced tagging options, and priority customer support.</li>
</ol>

<h2><strong>Design and Implementation Constraints</strong></h2>

<ul>
    <li><strong>Email Provider Compatibility:</strong> The system must be compatible with major email providers like Gmail, Outlook, and Yahoo.</li>
    <li><strong>API Rate Limits:</strong> Careful management of API calls to avoid hitting rate limits imposed by email service providers.</li>
    <li><strong>Data Security:</strong> Strong security protocols must be in place to ensure user data privacy.</li>
</ul>

<h2><strong>Assumptions and Dependencies</strong></h2>

<ul>
    <li>The application will depend on third-party email APIs like Gmail API and Outlook API.</li>
    <li>It is assumed that users are willing to grant necessary permissions for the application to access their email accounts for scanning and tagging purposes.</li>
</ul>

<h1><strong>External Interface Requirements</strong></h1>

<h2><strong>User Interfaces</strong></h2>

<p>For the desktop and mobile interfaces:</p>

<ul>
    <li>A clean and intuitive interface for managing connected email accounts and viewing tagged emails.</li>
    <li>A central dashboard displaying connected email accounts, tagging settings, and search options.</li>
    <li>Easy navigation bars for accessing different features like account settings, tagging preferences, and advanced search.</li>
</ul>

<h2><strong>Software Interfaces</strong></h2>

<ul>
    <li>The application should integrate with Gmail, Outlook, and Yahoo email APIs for connecting and managing email accounts.</li>
    <li>A context-based search algorithm must be used for scanning emails and retrieving relevant results.</li>
</ul>

<h1><strong>System Features</strong></h1>

<h2><strong>Feature 1. User Registration and Authentication</strong></h2>

<h3>Description and Priority:</h3>
<p>High-priority feature that allows users to register for an account and log in to access the tool.</p>

<h3>Stimulus/Response Sequences:</h3>
<ul>
    <li><strong>Sign Up</strong>
        <ul>
            <li>User navigates to the website and clicks on the "Sign Up" button.</li>
            <li>System prompts user to enter their email address, password, and other required details.</li>
            <li>User submits the form.</li>
            <li>System verifies the details and activates the account via verification email.</li>
        </ul>
    </li>
    <li><strong>Sign In</strong>
        <ul>
            <li>User navigates to the website and clicks on the "Sign In" button.</li>
            <li>System prompts user to enter their email address and password.</li>
            <li>User submits the form.</li>
            <li>System authenticates the credentials and grants access to the tool's features.</li>
        </ul>
    </li>
</ul>

<h3>Functional Requirements:</h3>
<ul>
    <li>The application must provide an interface for users to register and log in.</li>
    <li>The system must validate entered data and authenticate user credentials.</li>
</ul>

<h2><strong>Feature 2. Email Account Integration</strong></h2>

<h3>Description and Priority:</h3>
<p>High-priority feature that enables users to connect and manage different email accounts.</p>

<h3>Stimulus/Response Sequences:</h3>
<ul>
    <li>User logs in and navigates to the email account integration section.</li>
    <li>System displays an option to add new email accounts.</li>
    <li>User adds email credentials and grants necessary permissions.</li>
    <li>System verifies and connects the email account.</li>
    <li>System fetches emails and starts the tagging process.</li>
</ul>

<h3>Functional Requirements:</h3>
<ul>
    <li>The application must allow users to connect multiple email accounts.</li>
    <li>The system must validate and connect the provided email credentials.</li>
    <li>The system must fetch and display emails for the connected accounts.</li>
</ul>

<h2><strong>Feature 3. Automated Tagging</strong></h2>

<h3>Description and Priority:</h3>
<p>High-priority feature that automatically tags incoming emails for better organization and categorization.</p>

<h3>Stimulus/Response Sequences:</h3>
<ul>
    <li>User receives a new email in one of the connected accounts.</li>
    <li>System scans the incoming email content and applies relevant tags.</li>
    <li>User can view the tagged emails in their inbox.</li>
</ul>

<h3>Functional Requirements:</h3>

<ul>
    <li>The system must scan incoming emails and apply tags automatically.</li>
    <li>The system must provide an option for users to manually adjust tags.</li>
</ul>

<h2><strong>Feature 4. Contextual Search</strong></h2>

<h3>Description and Priority:</h3>
<p>High-priority feature that allows users to search for emails based on context rather than exact match.</p>

<h3>Stimulus/Response Sequences:</h3>
<ul>
    <li>User navigates to the search section of the app.</li>
    <li>User enters search criteria in the search bar.</li>
    <li>System scans the email database and retrieves contextually relevant results.</li>
    <li>User views and interacts with the search results.</li>
</ul>

<h3>Functional Requirements:</h3>
<ul>
    <li>The system must provide a search bar for users to input their search criteria.</li>
    <li>The system must use a contextual search algorithm to retrieve relevant emails.</li>
</ul>

<h2><strong>Feature 5. Free and Paid Tiers</strong></h2>

<h3>Description and Priority:</h3>
<p>Medium-priority feature that distinguishes between free and paid tiers with different numbers of allowed email integrations.</p>

<h3>Stimulus/Response Sequences:</h3>
<ul>
    <li>User signs up for an account.</li>
    <li>System assigns the default free tier status.</li>
    <li>User connects up to 3 email accounts for free.</li>
    <li>User opts for a paid subscription to connect more email accounts.</li>
    <li>System upgrades the account to premium status and allows more integrations.</li>
</ul>

<h3>Functional Requirements:</h3>
<ul>
    <li>The system must differentiate between free and paid subscription tiers.</li>
    <li>The system must limit the number of email accounts for free tier users to 3.</li>
    <li>The system must provide an option for users to upgrade to a paid tier.</li>
</ul>

<h1><strong>Non-functional Requirements</strong></h1>

<h2><strong>Performance Requirements</strong></h2>

<ul>
    <li>The system must be able to handle a large number of email accounts and data without significant delays.</li>
    <li>Contextual search should be fast and responsive.</li>
</ul>

<h2><strong>Security Requirements</strong></h2>

<ul>
    <li>All user data must be encrypted both in transit and at rest.</li>
    <li>Only authenticated and authorized users should have access to their email accounts and data.</li>
    <li>Two-factor authentication should be considered for added security.</li>
</ul>

<h2><strong>Integration Requirements</strong></h2>

<h3>Email Provider Integration</h3>

<p>The system should be able to integrate with Gmail, Outlook, and Yahoo email APIs to fetch and manage emails.</p>

<h3>Contextual Search Algorithm</h3>

<p>The application must integrate a contextual search algorithm to accurately retrieve emails based on the content.</p>

<h3>Payment Gateway Integration</h3>

<p>The system should integrate with a payment gateway to manage subscriptions and payments for the paid tier.</p>

<h2><strong>Data Privacy</strong></h2>

<ul>
    <li>The application must comply with data privacy regulations like GDPR and CCPA.</li>
    <li>User data must be stored securely with strict access controls.</li>
</ul>

<a href="https://react-pdf.org/"><strong>Powered by React-PDF (Bold)</strong></a>

<a href="https://react-pdf.org/">Powered by React-PDF</a>

`;
