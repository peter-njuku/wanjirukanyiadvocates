import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Header from "@/components/header";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import CTASection from "@/components/sections/cta-section";
import Footer from "@/components/footer";

export default function Team() {
    const teamMembers = [
        {
            image: "/kanyi.jpeg",
            name: "Wanjiru Kanyi",
            position: "Founding Advocate",
            bio: "Advocate of the High Court of Kenya with 10+ years experience in litigation and legal consultancy.",
            email: "wanjirukanyilawa@gmail.com",
            phone: "+254 792 932 136"
        },
        {
            image: "/BDO.jpeg",
            name: "Mercy Gaitho", 
            position: "Business Development Officer",
            bio: "Expert in client relations and business growth strategies for legal practices.",
            email: "mercy@lawfirm.com",
            phone: "+254 700 000 000"
        },
        {
            image: "/IMG_1247.jpg",
            name: "Vicky Kemboi",
            position: "Legal Assistant",
            bio: "Skilled in legal research, document preparation, and client coordination.",
            email: "vicky@lawfirm.com", 
            phone: "+254 700 000 000"
        },
        {
            image: "/IMG_1248.jpg",
            name: "Leah Kabiru",
            position: "Virtual Assistant",
            bio: "Specializes in digital administration and remote client support services.",
            email: "leah@lawfirm.com",
            phone: "+254 700 000 000"
        }
    ]

    return (
        <>
            <Header />
            
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h1 className="font-serif font-bold text-3xl md:text-4xl text-slate-900">
                            Meet Our Kenyan Legal Team
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Experienced professionals dedicated to serving your legal needs across Kenya
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((teamMember, index) => (
                            <Card 
                                key={index}
                                className="group border-slate-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
                            >
                                {/* Image Container - Optimized */}
                                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
                                    <Image 
                                        src={teamMember.image}
                                        alt={teamMember.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        priority={index === 0}
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <CardHeader className="p-5 pb-3">
                                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {teamMember.name}
                                    </CardTitle>
                                    <CardDescription className="text-blue-600 font-medium text-sm">
                                        {teamMember.position}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="p-5 pt-0 flex-grow">
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        {teamMember.bio}
                                    </p>
                                    
                                    {/* Contact Links */}
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-slate-500">
                                            <Mail className="h-3 w-3 mr-2" />
                                            <span className="truncate">{teamMember.email}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-500">
                                            <Phone className="h-3 w-3 mr-2" />
                                            <span>{teamMember.phone}</span>
                                        </div>
                                    </div>
                                </CardContent>

                                {/* Social/Contact Footer */}
                                <div className="p-5 pt-0 mt-auto">
                                    <div className="flex space-x-3">
                                        <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors">
                                            <Mail className="h-4 w-4 text-slate-600" />
                                        </button>
                                        <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors">
                                            <Phone className="h-4 w-4 text-slate-600" />
                                        </button>
                                        <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 transition-colors">
                                            <Linkedin className="h-4 w-4 text-slate-600" />
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                        Ready to Work With Our Team?
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Contact us today for a consultation with our experienced legal professionals.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        Schedule Consultation
                    </button>
                </div>
            </section>
            
            <Footer />
        </>
    );
}