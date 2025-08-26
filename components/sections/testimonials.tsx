import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BadgeInfo } from "lucide-react"
import { title } from "process";

export default function Testimonials(){

    const testimonials = [
        {
            Description:"Best services in the cityvBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            highlights:"Mr Something"
        },
        {
            Description:"I got my justice form this guysBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            highlights:"Mr. something else"
        },
        {
            Description:"Wish I knew them soonerBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the cityBest services in the city",
            highlights:"Mr. IDK"
        }
    ]
    return(

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4">
                <div>
                    <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-6">
                        <BadgeInfo className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-blue-700 font-medium text-sm">Testimonials</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-2xl text-slate-900 mb-4">Comments from clients</h2>
                </div>
            </div>
            <div>
                {testimonials.map((testimonial, index) =>{
                    const testimonialInfo = testimonial.Description;
                    const Highlights = testimonial.highlights;                 
                    return(
                        <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-cyan-300/50 bg-white h-full overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-cyan-50/80 transition-colors duration-300">
                     
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {index + 1}/{testimonials.length}
                    </span>
                  </div>
                  
                  <CardTitle className="text-slate-900 text-xl group-hover:text-cyan-700 transition-colors duration-300 mb-4">
                    
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 text-base leading-relaxed mb-6">
                    {testimonialInfo}
                  </CardDescription>

                  
                </CardHeader>
                    <ul>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        <li className="flex items-center text-sm text-slate-600">{Highlights}</li>
                    </ul>
                
              </Card>
                    );
                })}
            </div>
        </section>

    );
}