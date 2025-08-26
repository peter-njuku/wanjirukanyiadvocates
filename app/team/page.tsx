import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";


export default function Team(){

    const teamMembers = [
        {
            image:"/kanyi.jpeg",
            name:"Wanjiru Kanyi",
            position:"Founding Advocate"
        },
        {
            image:"/BDO.jpeg",
            name:"Mercy Gaitho",
            position:"Business Developement Officer"
        },
        {
            image:"/IMG_1247.jpg",
            name:"Vicky Kemboi",
            position:"Legal Assistant"
        },
        {
            image:"/IMG_1248.jpg",
            name:"Leah Kabiru",
            position:"Virtual Assistant"
        }
    ]

    return(
        <>
        <Header />
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">
              Our Team
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {teamMembers.map((teamMember, index)=>{
                    return(
                        <Card 
                        key={index}
                        className="hover:shadow-xl transition-all duration-300 border-slate-200 group hover:border-cyan-300/50 bg-white h-full overflow-hidden hover:-translate-y-2"
                        >
                            <CardHeader>
                                <div>
                                    <img src={teamMember.image} alt="" />
                                </div>
                            <CardTitle className="text-slate-900 text-xl group-hover:text-cyan-700 transition-colors duration-300 mb-4">
                                {teamMember.name}
                            </CardTitle>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
        </div>
      </section>
        </>
    );
}