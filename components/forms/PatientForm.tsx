"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}
 

 
const PatientForm = () => {
    const [isLoading,setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
        const userData = {name , email , phone}
        alert(`Hold your fucking horses ${userData.email} \n ${userData.name} \n ${userData.phone}`)
    } catch (error) {
        
    }

  }
  return (
    <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there !</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name = 'name'
            label = 'Full name'
            placeholder = 'Enter your name here'
            iconSrc = "/assets/icons/user.svg"
            iconAlt = "user"
            
        />
        <CustomFormField 
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name = 'email'
            label = 'Email'
            placeholder = 'Enter your email address'
            iconSrc = "/assets/icons/email.svg"
            iconAlt = "email"
            
        />
        <CustomFormField 
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name = 'phone'
            label = 'Phone Number'
            placeholder = 'Enter your mobile no.'
            iconSrc = "/assets/icons/user.svg"
            iconAlt = "user"
            
        />
        <SubmitButton isLoading={isLoading}>Submit</SubmitButton>
      </form>
    </Form>
    </div>
  )
}

export default PatientForm;