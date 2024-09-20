import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const loginFormSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  password: z.string().min(8, 'Password minimal 8 karakter')
})

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const handleLogin = async (values: { username: string, password: string }) => {
    alert(JSON.stringify(values))
  }

  return (
    <main className="p-8 container mx-auto flex flex-col justify-center items-center max-w-screen-sm h-screen">
      <Form {...form}>
        <form className="w-full" onSubmit={form.handleSubmit(handleLogin)}>
          <Card>
            <CardHeader>
              <CardTitle>Selamat Datang Kembali</CardTitle>
              <CardDescription>Silahkan masukkan data diri anda</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="cursor-pointer">Username</FormLabel>
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
                    <FormLabel className="cursor-pointer">Password</FormLabel>
                    <FormControl>
                      <Input {...field} type={showPassword ? "text" : "password"} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Checkbox id="show-password" onCheckedChange={(checked) => setShowPassword(checked === true)} />
                <Label htmlFor="show-password" className="cursor-pointer">Tampilkan password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-4 w-full">
                <Button type="submit" disabled={!form.formState.isValid}>Login</Button>
                <Link to={'/register'}>
                  <Button variant={"link"} className="w-full">Belum punya akun?</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  )
}

export default LoginPage
