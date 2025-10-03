export default function SafeguardingPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-slate">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Safeguarding Policy
          </h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100 hover:border-blue-200 transition-all">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Purpose
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Ace Educate is committed to providing a safe and secure learning environment for all students, particularly those under 18. This policy outlines how we protect students during online lessons and ensure professional conduct.
                </p>
              </section>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    1. Supervision & Online Safety
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Lessons are delivered via approved platforms (e.g., Zoom, Google Meet).</li>
                    <li>Parents/guardians are encouraged to be present in the household during online sessions for students under 18.</li>
                    <li>Tutors must follow professional conduct standards and are not permitted to communicate with students outside approved channels.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    2. Recording & Monitoring
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Lessons may be recorded for quality assurance and safeguarding purposes.</li>
                    <li>Recordings are stored securely and accessed only by Ace Educate staff if needed.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    3. Communication & Boundaries
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Tutors will communicate with students only via Ace Educate-approved channels (email, platform chat, or messaging approved by the parent).</li>
                    <li>Tutors are expected to maintain a professional tone and respect boundaries at all times.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    4. Reporting Concerns
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Any safeguarding concerns must be reported immediately to Ace Educate management.</li>
                    <li>Parents can contact Ace Educate at any time if they have concerns about lessons, tutors, or online safety.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    5. Child Protection Checks
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Tutors are trained in safeguarding best practices and online safety protocols.</li>
                  </ul>
                </section>
                
                <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    By using Ace Educate services, parents/guardians acknowledge they have read and understood this Safeguarding & Online Lesson Policy.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
