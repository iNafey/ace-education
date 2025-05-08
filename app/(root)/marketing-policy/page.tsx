import React from 'react';

const MarketingPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-[#1e2129] dark:to-[#1e2129] p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-20">Marketing Terms and Policy</h1>
        <p className="text-lg text-gray-600 text-center mb-4">Effective Date: 08/05/2025</p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-4">
          These Marketing Terms and Policy outline how https://aceeducate.co.uk/ communicates with you for marketing purposes and your rights regarding such communications.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Consent to Receive Marketing Communications</h2>
        <p className="text-gray-600 mb-4">
          By creating an account and providing your consent during the onboarding process, you agree to receive marketing communications from https://aceeducate.co.uk/, including newsletters, promotions, and updates about our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Methods of Communication</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Email</li>
          <li>SMS/Text Messages</li>
          <li>In-App Notifications</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Managing Your Preferences</h2>
        <p className="text-gray-600 mb-4">
          You have the right to opt out of marketing communications at any time:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Email: Click the "Unsubscribe" link at the bottom of our marketing emails.</li>
          {/* <li>SMS/Text Messages: Reply "STOP" to any marketing text message you receive.</li> */}
          <li>Account Settings: Adjust your communication preferences in your account settings on our platform.</li>
          <li>Contact Us Directly: Email us at team@aceeducate.co.uk with your request.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Third-Party Marketing</h2>
        <p className="text-gray-600 mb-4">
          We do not share your personal data with third parties for their marketing purposes without your explicit consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Personalized Advertising</h2>
        <p className="text-gray-600 mb-4">
          We may use your data to tailor advertisements and promotions to your interests within our platform. You can opt out of personalized advertising by adjusting your account settings or contacting us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking Technologies</h2>
        <p className="text-gray-600 mb-4">
          We use cookies and similar technologies to enhance your experience and deliver personalized content. For more information, please see our Cookie Policy.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Data Protection</h2>
        <p className="text-gray-600 mb-4">
          All marketing activities are conducted in accordance with our Data Privacy Policy and applicable data protection laws, including the UK GDPR and the Privacy and Electronic Communications Regulations (PECR).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
        <p className="text-gray-600 mb-4">
          Our marketing communications are directed at individuals who have provided their contact details in the form of email or mobile number. We do not knowingly collect or use personal data from children for marketing purposes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to This Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update our Marketing Terms and Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          For any questions or concerns regarding our marketing practices, please contact us at:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Email: team@aceeducate.co.uk</li>
          <li>Address: https://aceeducate.co.uk/</li>
        </ul>
      </div>
    </div>
  );
};

export default MarketingPolicy;