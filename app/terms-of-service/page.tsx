import React from "react";
const Terms = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="mb-6">
          Welcome to CareerNexus. By using our services, you agree to comply
          with and be bound by the following terms and conditions. Please read
          these carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Acceptance of Terms
        </h2>
        <p>
          By accessing or using CareerNexus, you agree to be bound by these
          Terms of Service and all applicable laws and regulations. If you do
          not agree with any part of these terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Accounts</h2>
        <p>
          To use certain features of CareerNexus, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account information and for all activities that occur under your
          account. You agree to notify us immediately of any unauthorized use of
          your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
        <p>
          You retain all rights to any content you submit, post, or display on
          CareerNexus. By posting content, you grant CareerNexus a
          non-exclusive, worldwide, royalty-free license to use, copy,
          reproduce, process, adapt, modify, publish, transmit, display, and
          distribute such content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Prohibited Activities
        </h2>
        <p>
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Violating laws or regulations</li>
          <li>Impersonating other individuals or entities</li>
          <li>Interfering with or disrupting CareerNexus services</li>
          <li>Collecting user information without consent</li>
          <li>Posting false, misleading, or fraudulent content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Intellectual Property
        </h2>
        <p>
          The CareerNexus service and its original content, features, and
          functionality are owned by CareerNexus and are protected by
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever, including but not limited to a
          breach of the Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Limitation of Liability
        </h2>
        <p>
          In no event shall CareerNexus, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from your access to or use of or
          inability to access or use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          8. Changes to Terms
        </h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If
          a revision is material, we will provide at least 30 days&apos; notice
          prior to any new terms taking effect. What constitutes a material
          change will be determined at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          legal@careernexus.com.
        </p>

        <p className="mt-8">
          By using CareerNexus, you acknowledge that you have read and
          understood these Terms of Service and agree to be bound by them.
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: October 31, 2024
        </p>
      </div>
    </main>
  );
};
export default Terms;
