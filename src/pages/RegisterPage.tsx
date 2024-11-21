import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"
import { useRegister } from "@/services/auth.service"
import { registerFormSchema } from "@/types/schema/auth"

const RegisterPage = () => {
  const registerMutation = useRegister()
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const handleRegister = async (values: { username: string, password: string, confirmPassword: string }) => {
    registerMutation.mutate(values, {
      onSuccess: () => {
        navigate('/')
      }
    })
  }

  return (
    <main className="p-8 container mx-auto flex flex-col justify-center items-center max-w-screen-sm h-screen">
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(handleRegister)}>
          <Card>
            <CardHeader>
              <CardTitle>Buat Akun Baru</CardTitle>
              <CardDescription>Silahkan masukkan data diri anda</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} type="username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <Input {...field} type='password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit" disabled={!form.formState.isValid}>Daftar</Button>
                <Link to={'/login'}>
                  <Button variant={"link"} className="w-full">Sudah punya akun?</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  )
}

export default RegisterPage