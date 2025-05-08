import Link from "next/link";


export default function PrivacyPolicy() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:bg-gradient-to-b dark:from-[#1e2129] dark:via-dark:from-[#1e2129] dark:to-[#1e2129] p-4 sm:p-6 lg:p-8">
            <h1 className="text-4xl font-bold text-center mt-20">Privacy Policy</h1>
            <p className="text-lg text-center text-gray-600 mb-4">Last updated: 8th May 2025</p>
            This privacy notice tells you what to expect us to do with your personal information.
            
            <ul className="list-disc list-inside mb-10">
                <li><Link href={"#contact-details"} className="text-blue-500 hover:underline">Contact details</Link></li>
                <li><Link href={"#info-collection"} className="text-blue-500 hover:underline">What information we collect, use, and why</Link></li>
                <li><Link href={"#data-protection-rights"} className="text-blue-500 hover:underline">Lawful bases and data protection rights</Link></li>
                <li><Link href={"#personal-info-source"} className="text-blue-500 hover:underline">Where we get personal information from</Link></li>
                <li><Link href={"#info-retention"} className="text-blue-500 hover:underline">How long we keep information</Link></li>
                <li><Link href={"#info-share"} className="text-blue-500 hover:underline">Who we share information with</Link></li>
            </ul>

            <div id="contact-details" className="mb-8">
                <h2 className="text-xl mb-2">Contact details</h2>
                <p>Telephone</p>
                +447459627884
                
                <p>Email</p>
                team@aceeducate.co.uk
            </div>
            
            <div id="info-collection" className="mb-8">
                <h2 className="text-xl mb-2">What information we collect, use, and why</h2>
                We collect or use the following information for student education and welfare:
                
                <ul className="list-disc list-inside mb-4">
                    <li>Names and contact details for students/children</li>
                    <li>Names and contact details for carers</li>
                    <li>Gender</li>
                    <li>Pronoun preferences</li>
                    <li>Date of birth</li>
                    <li>Account access information</li>
                </ul>

                We collect or use the following information for information updates or marketing purposes:
                
                <ul className="list-disc list-inside mb-4">
                    <li>Names and contact details</li>
                    <li>Marketing preferences</li>
                    <li>Website and app user journey information</li>
                    <li>Records of consent, where appropriate</li>
                </ul>
            </div>

            <div id="data-protection-rights" className="mb-8">
                <h2 className="text-xl mb-2">Lawful bases and data protection rights</h2>
                <p>Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO’s website.</p>
                
                <p>Which lawful basis we rely on may affect your data protection rights which are in brief set out below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:</p>
                
                <ul className="list-disc list-inside mb-4">
                    <li>Your right of access - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. You can read more about this right here.</li>
                    <li>Your right to rectification - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. You can read more about this right here.</li>
                    <li>Your right to erasure - You have the right to ask us to delete your personal information. You can read more about this right here.</li>
                    <li>Your right to restriction of processing - You have the right to ask us to limit how we can use your personal information. You can read more about this right here.</li>
                    <li>Your right to object to processing - You have the right to object to the processing of your personal data. You can read more about this right here.</li>
                    <li>Your right to data portability - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. You can read more about this right here.</li>
                    <li>Your right to withdraw consent - When we use consent as our lawful basis you have the right to withdraw your consent at any time. You can read more about this right here.</li>
                </ul>
                
                <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>
                
                <p>To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.</p>
                
                <h3 className="text-lg font-semibold mt-4 mb-2">Our lawful bases for the collection and use of your data</h3>
                <p>Our lawful bases for collecting or using personal information for student education and welfare are:</p>
                
                <ul className="list-disc list-inside mb-4">
                    <li>Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                    <li>Contract - we have to collect or use the information so we can enter into or carry out a contract with you. All of your data protection rights may apply except the right to object.</li>
                </ul>
                
                <p>Our lawful bases for collecting or using personal information for information updates or marketing purposes are:</p>
                
                <ul className="list-disc list-inside mb-4">
                    <li>Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
                </ul>
            </div>
            
            <div id="personal-info-source" className="mb-8">
                <h2 className="text-xl mb-2">Where we get personal information from</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Directly from you</li>
                    <li>From your parents or carers</li>
                </ul>
            </div>

            <div id="info-retention" className="mb-8">
                <h2 className="text-xl mb-2">How long we keep information</h2>
                We will keep your personal information for as long as we need it to provide you with our services. We will also keep your personal information for as long as we need to comply with our legal obligations, resolve disputes, and enforce our agreements. All personal information will be deleted after 2 years of inactivity.
            </div>
            <div id="info-share" className="mb-8"> 
                <h2 className="text-xl mb-2">Who we share information with</h2>
                Your parents or carers
            </div>
        </div>

    )
}