// src/data/projectsData.js

const projectsData = [
    {
      title: 'Referral Points System',
      description: 'Developed a Referral Points System to replace direct monetary rewards for clients, ensuring compliance with SEBI regulations.',
      keyContributions: [
        'Designed and implemented the logic for point allocation and redemption using Java and Go.',
        'Developed REST APIs for managing referral points, integrating them into the existing system.',
        'Built the frontend using Vue.js for clients to track and redeem their points.',
        'Automated monthly charge reversal, ensuring seamless deductions if points were available.',
        'Optimized database queries in MySQL for efficient transaction handling.',
        'Used Git for version control and collaborated with cross-functional teams.'
      ]
    },
    {
      title: 'JV (Journal Voucher) Service',
      description: 'Developed a robust JV Service enabling secure and authenticated journal voucher (JV) posting with advanced error handling and automated reconciliation.',
      keyContributions: [
        'Implemented user authentication using Token & Secret ClientID.',
        'Designed JV without GST, JV with GST, and Intermediate JV processing.',
        'Developed automated reversal and retry mechanism (3 attempts every 5 minutes) for failed transactions.',
        'Enabled real-time status tracking, enhancing transparency and user experience.'
      ]
    },
    {
      title: 'Mandate Auto-Debit Process',
      description: 'Implemented an automated bank-to-trading account fund transfer system using third-party APIs and SDKs.',
      keyContributions: [
        "Integrated third-party APIs and SDKs to securely perform one-time user authorization for auto-debit mandates.",
        "Enabled direct debit from bank accounts and automated credit to trading accounts post-authentication.",
        "Developed custom options for debit frequency including daily, weekly, fortnightly, and monthly.",
        "Built robust functionality to pause, resume, update, and delete mandates based on user preferences.",
        "Ensured high-level security, compliance, and data validation during mandate execution.", "Optimized API response handling and error recovery to maintain transaction consistency and accuracy"
      ]
    }
  ];
  
  export default projectsData;
  