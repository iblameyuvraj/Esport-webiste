import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
                TERMS & CONDITIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">1. General Terms</h2>
                <p>
                  By accessing and participating in tournaments on NexusGaming, you agree to be bound by these Terms and
                  Conditions. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">2. Eligibility</h2>
                <p>
                  Participants must be at least 16 years of age to register and participate in tournaments. Participants
                  under 18 years of age must have parental or guardian consent. NexusGaming reserves the right to
                  request proof of age at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">3. Registration and Accounts</h2>
                <p>
                  Users must provide accurate and complete information during registration. Each user is responsible for
                  maintaining the confidentiality of their account information. Users are solely responsible for all
                  activities that occur under their account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">4. Tournament Rules</h2>
                <p>
                  Each tournament has specific rules that participants must follow. Violation of tournament rules may
                  result in disqualification without refund. NexusGaming reserves the right to modify tournament rules
                  at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">5. Code of Conduct</h2>
                <p>
                  Participants must demonstrate good sportsmanship and respect toward other players, tournament
                  officials, and staff. Harassment, cheating, exploiting, or any form of unsportsmanlike conduct will
                  not be tolerated and may result in immediate disqualification and potential account termination.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">6. Payments and Refunds</h2>
                <p>
                  All payments are final and non-refundable unless otherwise specified. Tournament entry fees are
                  non-transferable. NexusGaming reserves the right to cancel tournaments, in which case entry fees will
                  be refunded.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">7. Prize Distribution</h2>
                <p>
                  Prize pools are distributed according to the specific tournament rules. Winners may be required to
                  provide additional information for prize distribution. Taxes on prizes are the sole responsibility of
                  the winners.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">8. Content and Intellectual Property</h2>
                <p>
                  By participating in tournaments, you grant NexusGaming the right to use your gameplay, username, and
                  likeness for promotional purposes. All content on the NexusGaming platform is protected by copyright
                  and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">9. Limitation of Liability</h2>
                <p>
                  NexusGaming is not liable for any direct, indirect, incidental, special, or consequential damages
                  arising out of or in any way connected with your use of our services. This includes but is not limited
                  to damages for loss of profits, data, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">10. Modifications to Terms</h2>
                <p>
                  NexusGaming reserves the right to modify these Terms and Conditions at any time. Continued use of our
                  services after any modifications indicates your acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3 text-white">11. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of the
                  jurisdiction in which NexusGaming operates, without regard to its conflict of law principles.
                </p>
              </section>

              <section className="pt-4 border-t border-gray-800">
                <p className="text-center">Last updated: May 15, 2025</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
