import Layout from '@/components/Layout'
import React, { FormEvent, useState } from 'react'

// import icons
import { FiMail, FiMapPin } from "react-icons/fi"

// import emailJS
import emailjs from "emailjs-com";

const Contact = () => {

    const [user_name, setUser_name] = useState("");
    const [user_email, setUser_email] = useState("");
    const [user_message, setUser_message] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(user_name + user_email + user_message)

        const emailContent = {
            name: user_name,
            email: user_email,
            message: user_message
        }

        emailjs.send('service_fjuty4i', 'template_pz3rz45', emailContent, 'OH9eZRCqTbnO-1dmt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }



    return (
        <Layout>
            <div className="container mx-auto">
                {/* section title */}
                <div className="flex flex-col items-center text-center">
                    <h2 className="section-title">
                        Contactez-<span className="gradient__text">moi</span> 📤
                    </h2>
                    <p className="">Vous êtes intéressé par mon profil et vous souhaitez me contacter ? Vous pouvez me contacter en remplissant le formulaire ci-dessous</p>
                </div>

                <div className="flex flex-col lg:gap-x-8 my-11 lg:flex-row">
                    {/* info */}
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        <div className="flex flex-col lg:flex-row gap-x-4">
                            <div className="rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                <FiMail />
                            </div>
                            <div>
                                <h4 className="text-xl mb-1 font-bold">Adresse mail</h4>
                                <p className="mb-1">Envie de me joindre directement par mail ?</p>
                                <p className="font-normal">Mon adresse mail : samuelndj.997@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-x-4">
                            <div className="rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                <FiMapPin />
                            </div>
                            <div>
                                <h4 className="text-xl mb-1 font-bold">Localisation</h4>
                                <p className="mb-1">Paris, France</p>
                                <p className="font-normal">Disponible pour entretien en visio ou sur place</p>
                            </div>
                        </div>
                    </div>


                    {/* form */}
                    <form className="space-y-8 w-full max-w-[780px]" onSubmit={e => handleSubmit(e)}>
                        <div className="flex gap-8">
                            <input
                                className="input"
                                type="text"
                                placeholder="Votre nom"
                                onChange={(e) => setUser_name(e.target.value)}
                            />
                            <input
                                className="input"
                                type="email"
                                placeholder="Votre email"
                                onChange={(e) => setUser_email(e.target.value)}
                            />
                        </div>

                        <textarea
                            className="textarea"
                            placeholder="Un p'tit message ? 👋"
                            onChange={(e) => setUser_message(e.target.value)}
                        ></textarea>
                        <button className="btn btn-lg bg-primary/90 hover:bg-primary text-white">
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact