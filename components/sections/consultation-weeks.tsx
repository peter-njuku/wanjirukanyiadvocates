import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function ConsultationWeeks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-accent text-accent-foreground">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-2xl md:text-3xl font-serif">Land & Inheritance Legal Service Week</CardTitle>
              <CardDescription className="text-accent-foreground/80 text-lg">
                Walk-in consultations available - No appointments needed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Land & Property Services:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Land contracts and agreements</li>
                    <li>• Title transfers and subdivisions</li>
                    <li>• Leases and rights of access</li>
                    <li>• Due diligence and searches</li>
                    <li>• Lost title deed recovery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Succession Services:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Letters of Administration</li>
                    <li>• Estate planning guidance</li>
                    <li>• Inheritance disputes</li>
                    <li>• Powers of attorney</li>
                    <li>• Trust establishment</li>
                  </ul>
                </div>
              </div>
              <div className="text-center pt-4">
                <p className="mb-4">
                  <strong>Location:</strong> ACK St. Peters Uthiru, Mustard Seed Complex, Ground Floor, Unit G.05
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Get More Information</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
