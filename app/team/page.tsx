import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Header from "@/components/header";


export default function Team(){
    return(
        <>
        <Header />
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">
              Our Team
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              We specialize in a wide range of legal matters, providing expert guidance and representation across
              multiple practice areas to serve Kenya's diverse legal needs.
            </p>
          </div>
        </div>
      </section>
        </>
    );
}