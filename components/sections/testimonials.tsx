import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Shield, BadgeInfo } from "lucide-react"
import { title } from "process";
import { Button } from "../ui/button";

export default function Testimonials(){

    const testimonials = [
        {
            Description:"Best services in the cityvBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            clientName:""
        },
        {
            Description:"I got my justice form this guysBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            clientName:""
        },
        {
            Description:"Wish I knew them soonerBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            clientName:"Mr. IDK"
        }
    ]
    return(

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
  <div className="container mx-auto px-4">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center bg-blue-50 px-6 py-3 rounded-full mb-6 mx-auto">
        <BadgeInfo className="h-5 w-5 text-blue-600 mr-2" />
        <span className="text-blue-700 font-medium text-sm">Testimonials</span>
      </div>
      <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Hear from Kenyan clients we've helped with their legal matters
      </p>
    </div>

    {/* Testimonials Grid - Side by Side Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => {
        const testimonialInfo = testimonial.Description;
        
        
        return (
          <Card 
            key={index} 
            className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-cyan-300/50 bg-white h-full overflow-hidden hover:-translate-y-2 flex flex-col"
          >
            <CardHeader className="p-6 pb-4">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-cyan-50 transition-colors duration-300">
                  {/* You can add an icon here if needed */}
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {index + 1}/{testimonials.length}
                </span>
              </div>
              
              {/* Testimonial Text */}
              <div className="flex-grow">
                <p className="text-slate-600 text-base leading-relaxed mb-4 italic">
                  "{testimonialInfo}"
                </p>
              </div>
            </CardHeader>

            {/* Highlights Section */}
            <CardContent className="p-6 pt-0 mt-auto">
              
            </CardContent>

            {/* Client Info Footer */}
            <CardFooter className="p-6 pt-0 mt-auto">
              <div className="flex items-center">
                <div className="bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-slate-600 font-semibold text-sm">
                    {testimonial.clientName?.charAt(0) || 'C'}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.clientName || 'Anonymous Client'}
                  </p>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>

    {/* Call to Action */}
    <div className="text-center mt-16">
      <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
        Read More Client Stories
      </Button>
    </div>
  </div>
</section>
    );
}