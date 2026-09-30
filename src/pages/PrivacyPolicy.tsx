import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';

const LAST_UPDATED = '28 September 2026';

const sections = [
  { id: 'about', title: 'About this Privacy Policy' },
  { id: 'who-we-are', title: 'Who we are' },
  { id: 'who-applies', title: 'Who this policy applies to' },
  { id: 'what-we-collect', title: 'What personal data we collect' },
  { id: 'how-we-collect', title: 'How we collect personal data' },
  { id: 'other-people', title: 'Information about other people' },
  { id: 'public', title: 'Publicly visible information' },
  { id: 'why-we-use', title: 'Why we use your personal data' },
  { id: 'donations', title: 'Donations & payment information' },
  { id: 'champions', title: 'Cause Champions & volunteers' },
  { id: 'ngo', title: 'NGO partner information' },
  { id: 'comms', title: 'Communications & marketing' },
  { id: 'cookies', title: 'Cookies, analytics & similar technologies' },
  { id: 'share', title: 'How we share personal data' },
  { id: 'third-party', title: 'Third-party services' },
  { id: 'retention', title: 'How long we keep personal data' },
  { id: 'security', title: 'Data security & data breaches' },
  { id: 'rights', title: 'What privacy rights you have' },
  { id: 'consent', title: 'Consent & withdrawal' },
  { id: 'children', title: 'Children’s privacy' },
  { id: 'transfers', title: 'International data transfers' },
  { id: 'links', title: 'Links to other websites' },
  { id: 'changes', title: 'Changes to this Privacy Policy' },
  { id: 'contact', title: 'Contact us' },
  { id: 'law', title: 'Governing law' },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{children}</h2>
      <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
    </>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Privacy Policy | The Giving Circle"
        description="How The Giving Circle collects, uses, shares and protects personal data when you visit our website, donate, become a Cause Champion, volunteer, or contact us."
        keywords="privacy policy, The Giving Circle privacy, data protection, personal data India, donation privacy"
        canonicalUrl="https://www.thegivingcircle.in/privacy-policy"
        ogTitle="Privacy Policy | The Giving Circle"
        ogDescription="How we handle personal data on The Giving Circle platform."
      />

      {/* Hero — same pattern as article / cause pages */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-900">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">Privacy Policy</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            How The Giving Circle collects, uses, shares and protects your personal data when you
            use our platform.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Team</span>
            <span>•</span>
            <span>Last Updated: {LAST_UPDATED}</span>
          </div>
        </div>
      </section>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At The Giving Circle, we respect your privacy and are committed to handling personal data
          responsibly, transparently and in accordance with applicable law.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          This Privacy Policy explains what personal data we collect, why we collect it, how we use
          and share it, how long we retain it, and the choices and rights available to you when you
          use{' '}
          <a
            href="https://www.thegivingcircle.in"
            className="text-green-700 hover:text-green-900 underline font-medium"
          >
            www.thegivingcircle.in
          </a>{' '}
          and related services.
        </p>

        {/* TOC */}
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-3">In This Policy</h2>
          <ol className="space-y-1 text-sm columns-1 sm:columns-2 gap-x-8">
            {sections.map((s, i) => (
              <li key={s.id} className="break-inside-avoid">
                <a href={`#${s.id}`} className="text-green-700 hover:text-green-900">
                  {i + 1}. {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <section id="about" className="mb-12 scroll-mt-28">
          <SectionHeading>1. About This Privacy Policy</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">This Privacy Policy applies when you:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>visit The Giving Circle website;</li>
            <li>make or attempt to make a donation;</li>
            <li>become a Cause Champion or participate in a Giving Circle;</li>
            <li>register for volunteer opportunities or Young Champions programmes;</li>
            <li>submit campaign, profile, directory or impact information;</li>
            <li>contact us, provide feedback or raise a grievance; or</li>
            <li>otherwise interact with The Giving Circle.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            This Privacy Policy should be read together with our Terms of Use (when published on this
            website) and any additional privacy notices shown when we collect personal data.
          </p>
        </section>

        <section id="who-we-are" className="mb-12 scroll-mt-28">
          <SectionHeading>2. Who We Are</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Giving Circle is a social-impact and community-giving platform founded in 2022. It
            connects individuals and communities with verified NGOs, social causes, fundraising
            campaigns and volunteer opportunities across India.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            For the purposes of applicable data-protection law,{' '}
            <strong>The Giving Circle Community Platform</strong> (operating as{' '}
            <strong>The Giving Circle</strong>) is responsible for determining how personal data
            collected through The Giving Circle is processed, unless otherwise stated.
          </p>
          <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded-r-lg">
            <p className="text-green-900">
              <strong>Contact:</strong>{' '}
              <a href="mailto:hello@thegivingcircle.in" className="underline font-medium">
                hello@thegivingcircle.in
              </a>
            </p>
          </div>
        </section>

        <section id="who-applies" className="mb-12 scroll-mt-28">
          <SectionHeading>3. Who This Policy Applies To</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed">
            This Privacy Policy applies to website visitors, donors, Cause Champions, Young
            Champions, volunteers, NGO representatives, animal-welfare directory contributors,
            beneficiaries where relevant, and other individuals who interact with The Giving Circle.
          </p>
        </section>

        <section id="what-we-collect" className="mb-12 scroll-mt-28">
          <SectionHeading>4. What Personal Data Do We Collect?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Depending on how you use The Giving Circle, we may collect the following categories of
            personal data.
          </p>

          <div className="space-y-4">
            {[
              {
                title: 'Identity and Contact Information',
                items: [
                  'name;',
                  'email address;',
                  'phone number;',
                  'city, country or location information voluntarily provided by you; and',
                  'other contact information you submit.',
                ],
              },
              {
                title: 'Donation Information',
                items: [
                  'donor name;',
                  'email address and phone number;',
                  'donation amount;',
                  'campaign or NGO supported;',
                  'transaction reference and payment status; and',
                  'information required for an eligible 80G receipt or donation acknowledgement.',
                ],
              },
              {
                title: 'Cause Champion Information',
                items: [
                  'name and contact information;',
                  'profile information;',
                  'selected cause, campaign participation and activity;',
                  'communication preferences; and',
                  'content or materials submitted by you (including PehliClass and similar forms).',
                ],
              },
              {
                title: 'Volunteer & Young Champions Information',
                items: [
                  'name and contact details;',
                  'availability;',
                  'areas of interest;',
                  'school, college or social-handle information where you provide it;',
                  'relevant skills or experience; and',
                  'information required by the participating NGO for the relevant opportunity.',
                ],
              },
              {
                title: 'Technical and Usage Information',
                items: [
                  'IP address;',
                  'device and browser information;',
                  'pages visited and referral source;',
                  'approximate location derived from IP address;',
                  'session and interaction information; and',
                  'cookie or analytics identifiers (including Google Analytics where enabled).',
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mt-6 mb-4">
            We may also collect information you provide when you contact support, submit a form
            (including Cause Champion, NGO Partner, animal-welfare directory and PehliClass forms),
            send us an email, provide feedback, raise a grievance or communicate with us through
            another channel.
          </p>
          <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded-r-lg">
            <p className="text-green-900">
              <strong>Payments:</strong> Card, UPI and banking credentials may be processed directly
              by authorised payment providers or participating NGOs. The Giving Circle does not store
              complete card numbers, UPI PINs or online-banking credentials where those are handled
              by the payment provider.
            </p>
          </div>
        </section>

        <section id="how-we-collect" className="mb-12 scroll-mt-28">
          <SectionHeading>5. How Do We Collect Personal Data?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">We may collect personal data:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed">
            <li>directly from you;</li>
            <li>when you submit forms or register for activities;</li>
            <li>when you donate;</li>
            <li>when you become a Cause Champion, Young Champion or volunteer;</li>
            <li>when you communicate with us;</li>
            <li>from participating NGOs where appropriate;</li>
            <li>through cookies and analytics technologies; and</li>
            <li>from authorised service providers involved in operating the platform.</li>
          </ul>
        </section>

        <section id="other-people" className="mb-12 scroll-mt-28">
          <SectionHeading>6. Information About Other People</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you provide personal data about another person, you should ensure that you have the
            appropriate authority or permission to provide that information and, where required, have
            informed that individual about how their information may be used.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This may apply, for example, to beneficiary stories, photographs, testimonials, volunteer
            referrals or campaign information submitted by Cause Champions or NGO representatives.
          </p>
        </section>

        <section id="public" className="mb-12 scroll-mt-28">
          <SectionHeading>7. Publicly Visible Information</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Certain information that you choose to publish through The Giving Circle may be publicly
            accessible. This may include your name, profile information, Cause Champion details,
            campaign stories, photographs, videos, testimonials or campaign updates.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Public content may also appear in search-engine results or be shared through social-media
            platforms. Please avoid submitting personal or sensitive information that you do not want
            to make publicly available.
          </p>
        </section>

        <section id="why-we-use" className="mb-12 scroll-mt-28">
          <SectionHeading>8. Why Do We Use Your Personal Data?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">We may use personal data to:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              'provide and operate The Giving Circle platform',
              'enable donations and campaign participation',
              'connect users with participating NGOs',
              'facilitate volunteer opportunities',
              'provide campaign and impact updates',
              'issue or facilitate eligible donation documentation',
              'respond to enquiries and support requests',
              'send important service and transaction-related communications',
              'prevent fraud, misuse and security incidents',
              'improve website functionality and user experience',
              'understand platform usage and performance',
              'comply with legal and regulatory obligations',
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-gray-700 text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We also use personal data to protect the rights, safety and integrity of users, NGOs and
            The Giving Circle. We aim to collect and use only the personal data reasonably necessary
            for the relevant purpose.
          </p>
        </section>

        <section id="donations" className="mb-12 scroll-mt-28">
          <SectionHeading>9. Donations &amp; Payment Information</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Donations made in connection with The Giving Circle may be processed by participating
            NGOs, banks, payment gateways or authorised payment service providers. The Giving Circle
            acts as a bridge to verified causes; contribution amounts may flow directly to partner
            NGOs rather than through The Giving Circle.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Payment providers may collect information directly from you and process that information
            under their own terms and privacy policies. The Giving Circle may receive limited
            transaction information such as payment status, transaction reference, amount, donor
            details and the recipient campaign or NGO.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We do not require access to complete payment credentials where the payment provider can
            process the transaction independently.
          </p>
        </section>

        <section id="champions" className="mb-12 scroll-mt-28">
          <SectionHeading>10. Cause Champions &amp; Volunteers</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Information provided by Cause Champions may be used to set up or manage campaign
            participation, communicate campaign updates, provide approved campaign materials,
            understand campaign engagement and support community-building activities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Volunteer and Young Champions information may be shared with the participating NGO or
            organisation responsible for the relevant opportunity where necessary to process
            registration or participation.
          </p>
        </section>

        <section id="ngo" className="mb-12 scroll-mt-28">
          <SectionHeading>11. NGO Partner Information</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We may collect information from NGO representatives in connection with verification,
            onboarding, campaigns and ongoing partnerships. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>representative names and contact details;</li>
            <li>organisational registration information;</li>
            <li>financial or audit-related documents;</li>
            <li>80G-related information;</li>
            <li>FCRA information where relevant;</li>
            <li>governance documentation; and</li>
            <li>programme or impact information.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Such information may be used for due diligence, compliance, campaign management and
            maintaining platform trust.
          </p>
        </section>

        <section id="comms" className="mb-12 scroll-mt-28">
          <SectionHeading>12. Communications &amp; Marketing</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We may use your contact information to send service-related communications such as
            donation confirmations, campaign updates, volunteer information, security notices and
            responses to support requests (including emails sent to{' '}
            <a
              href="mailto:hello@thegivingcircle.in"
              className="text-green-700 hover:text-green-900 underline font-medium"
            >
              hello@thegivingcircle.in
            </a>
            ).
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Where appropriate consent has been obtained, we may also send newsletters, campaign
            recommendations, fundraising updates or other promotional communications by email, SMS,
            WhatsApp or similar channels.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            You may opt out of promotional communications using the unsubscribe option provided or by
            contacting us. Essential service or transaction-related communications may still be sent
            where necessary.
          </p>
        </section>

        <section id="cookies" className="mb-12 scroll-mt-28">
          <SectionHeading>13. Cookies, Analytics &amp; Similar Technologies</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Giving Circle may use cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>keep the website functioning correctly;</li>
            <li>understand how visitors use the website;</li>
            <li>remember preferences;</li>
            <li>measure campaign and website performance;</li>
            <li>improve the website experience; and</li>
            <li>support analytics and communications.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            We may use Google Analytics (GA4) and similar tools to measure site traffic and
            engagement. Where required, users may be given choices regarding optional cookies. You
            may also be able to control cookies through your browser settings.
          </p>
        </section>

        <section id="share" className="mb-12 scroll-mt-28">
          <SectionHeading>14. How Do We Share Personal Data?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We may share personal data only where reasonably necessary for the purposes described in
            this Privacy Policy. Recipients may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>participating NGOs;</li>
            <li>payment gateways and banks;</li>
            <li>website hosting providers (including cloud infrastructure such as AWS);</li>
            <li>technology, database and analytics providers;</li>
            <li>image and media delivery providers (such as Cloudinary);</li>
            <li>communication and email service providers;</li>
            <li>professional advisers;</li>
            <li>regulators or government authorities where legally required; and</li>
            <li>other service providers assisting with operation of the platform.</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded-r-lg">
            <p className="text-green-900">
              <strong>We do not sell personal data to third parties.</strong>
            </p>
          </div>
        </section>

        <section id="third-party" className="mb-12 scroll-mt-28">
          <SectionHeading>15. Third-Party Services</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Giving Circle may rely on external services for functions such as payments,
            analytics, hosting, communications, forms, email delivery, media hosting and social-media
            integrations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            These organisations may process personal data according to their own privacy policies.
            Users should review the privacy notices of third-party services they choose to use
            (including payment pages and NGO websites linked from our platform).
          </p>
        </section>

        <section id="retention" className="mb-12 scroll-mt-28">
          <SectionHeading>16. How Long Do We Keep Personal Data?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We retain personal data only for as long as reasonably necessary for the purpose for
            which it was collected, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>providing requested services;</li>
            <li>maintaining transaction and donation records;</li>
            <li>resolving complaints or disputes;</li>
            <li>complying with tax, accounting or legal requirements;</li>
            <li>protecting against fraud or misuse; and</li>
            <li>maintaining legitimate organisational records.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Retention periods may vary depending on the type of information and applicable legal
            requirements. When personal data is no longer required, we may securely delete or
            anonymise it, subject to applicable law.
          </p>
        </section>

        <section id="security" className="mb-12 scroll-mt-28">
          <SectionHeading>17. Data Security &amp; Data Breaches</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We use reasonable administrative, technical and organisational safeguards designed to
            protect personal data against unauthorised access, loss, misuse, alteration, disclosure
            and destruction.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            However, no online platform or transmission method can guarantee absolute security. Users
            should also take reasonable steps to protect their own devices and account information.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If we become aware of a personal data breach, we will take reasonable steps to
            investigate, contain and address the incident and make any notifications required under
            applicable law.
          </p>
        </section>

        <section id="rights" className="mb-12 scroll-mt-28">
          <SectionHeading>18. What Privacy Rights Do You Have?</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Subject to applicable law (including India’s Digital Personal Data Protection Act, 2023,
            where applicable), you may have rights relating to your personal data, including the
            ability to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed mb-4">
            <li>request information about how your personal data is processed;</li>
            <li>request access to personal data associated with you;</li>
            <li>request correction of inaccurate or incomplete information;</li>
            <li>request deletion or erasure where applicable;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>raise a grievance regarding the handling of your personal data; and</li>
            <li>nominate another individual to exercise certain rights where permitted by law.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Requests may be subject to identity verification and applicable legal requirements. To
            exercise these rights, contact{' '}
            <a
              href="mailto:hello@thegivingcircle.in"
              className="text-green-700 hover:text-green-900 underline font-medium"
            >
              hello@thegivingcircle.in
            </a>
            .
          </p>
        </section>

        <section id="consent" className="mb-12 scroll-mt-28">
          <SectionHeading>19. Consent &amp; Withdrawal</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Where we rely on your consent to process personal data, that consent should be freely
            given, specific, informed and indicated through a clear affirmative action.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            You may withdraw consent at any time where applicable. Withdrawal of consent will not
            affect processing that was lawful before the withdrawal.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Where personal data is necessary to provide a particular service, withdrawing consent may
            affect our ability to continue providing that service. The process for withdrawing
            consent should be reasonably easy and comparable to the process through which consent was
            originally provided.
          </p>
        </section>

        <section id="children" className="mb-12 scroll-mt-28">
          <SectionHeading>20. Children’s Privacy</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Giving Circle is not intended to knowingly collect personal data from children
            without appropriate parental or guardian consent where such consent is required by
            applicable law. Programmes involving students (such as Young Champions or school
            projects) should be undertaken with appropriate adult or institutional oversight.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If we become aware that personal data relating to a child has been collected without the
            required authorisation, we may take appropriate steps to remove or restrict that
            information.
          </p>
        </section>

        <section id="transfers" className="mb-12 scroll-mt-28">
          <SectionHeading>21. International Data Transfers</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed">
            Some technology or service providers used by The Giving Circle may process or store
            personal data outside India. Where personal data is transferred internationally, we will
            take reasonable steps to ensure that such transfers comply with applicable Indian law and
            appropriate safeguards.
          </p>
        </section>

        <section id="links" className="mb-12 scroll-mt-28">
          <SectionHeading>22. Links to Other Websites</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Giving Circle may contain links to participating NGOs, payment providers,
            social-media platforms and other external websites. We are not responsible for the
            privacy practices of those third-party sites. We encourage you to review their privacy
            policies before providing personal data.
          </p>
        </section>

        <section id="changes" className="mb-12 scroll-mt-28">
          <SectionHeading>23. Changes to This Privacy Policy</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            technology, legal requirements or platform features. The “Last Updated” date at the top
            of this page will be revised when changes are made. Continued use of the website after an
            update constitutes acceptance of the revised policy, where permitted by law.
          </p>
        </section>

        <section id="contact" className="mb-12 scroll-mt-28">
          <SectionHeading>24. Contact Us</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you have questions about this Privacy Policy, wish to exercise privacy rights, or wish
            to raise a grievance about how personal data is handled, please contact:
          </p>
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Giving Circle</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                Website:{' '}
                <a
                  href="https://www.thegivingcircle.in"
                  className="text-green-700 hover:text-green-900 underline font-medium"
                >
                  www.thegivingcircle.in
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href="mailto:hello@thegivingcircle.in"
                  className="text-green-700 hover:text-green-900 underline font-medium"
                >
                  hello@thegivingcircle.in
                </a>
              </p>
              <p>Area served: India</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            We will endeavour to acknowledge and respond to privacy-related requests within a
            reasonable time, subject to applicable law.
          </p>
        </section>

        <section id="law" className="mb-12 scroll-mt-28">
          <SectionHeading>25. Governing Law</SectionHeading>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            This Privacy Policy is governed by the laws of India. Subject to applicable law, disputes
            relating to this Privacy Policy may be subject to the exclusive jurisdiction of the
            competent courts in India.
          </p>
          <p className="text-sm text-gray-500">
            This page is provided for transparency and general information. It does not constitute
            legal advice.
          </p>
        </section>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-700">
            Looking for verified causes to support?
          </p>
          <Link
            to="/live-causes"
            className="inline-flex justify-center bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse Live Causes
          </Link>
        </div>
      </div>
    </div>
  );
}
