import Button from "./Button";
import Input from "./Input";
import { IoClose, FcGoogle, FaApple, CiFacebook } from "./Fonts";

const Register = () => {
    const closeR = () => {
        let closeRegister = document.querySelector('#Reg');

        closeRegister.style.display = 'none';
    };

  return (
    <div id="Reg" className=" hidden transition-all ease-in-out duration-500 ">
        <div className="fixed top-0 bg-dimblackopacity min-h-dvh h-full w-full flex items-center justify-center overflow-y-scroll z-50">
            <div className="mt-80">
                <div className="flex items-end justify-end">
                    <a href="#" ><IoClose className="text-2xl text-white my-6" onClick={closeR} /></a>
                </div>
                <div className=" max-w-md bg-white p-5 rounded-lg mb-8">
    {/* -------- */}<div >
                        <div className="flex justify-between my-2"><h1 className="font-medium text-xl">Create Account</h1> {/* <Button id='btn' onClick={showSignup} text='Sing in' link="./Signup" /> */}</div>
                        <div>
                            <div className="my-4">
                                <label>Email address</label>
                                <Input placeholder='Email address' />
                            </div>
                            <div className="my-4">
                                <label>First Name</label>
                                <Input placeholder='Name' />
                            </div>
                            <div className="my-4">
                                <label>Password</label>
                                <Input type='password' placeholder='Password' />
                            </div>
                        </div>
                    </div>  {/* end of input line */}

                    <div>
                        <p className="text-xs">
                            By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Grandhermes&apos; <a href="#" className="underline">Terms of Use </a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                    </div>

    {/* -------- */}{/* <div className="flex justify-between my-4">
                        <span ><input type='checkbox' className="cursor-pointer" /> Stay signed in</span>
                        <button><a href="#" className="underline text-sm">Forgot Password?</a></button>
                    </div> */}

        {/* -------- */}<div className="sign-btn my-4">
                        <Button icon text='Sign in' classN='w-full py-2 bg-primary text-white border-0' />
                    </div>

        {/* -------- */} <div className="w-full flex my-4"><span className="underline text-center w-full">Create an Account with</span></div>

        {/* -------- */}<div >
                        <div className="my-4">
                            <Button classN='flex w-full items-center justify-center ' icon={<FcGoogle  className="mr-2"/>} text='Contiue with Google'  />
                        </div>
                        <div className="my-4">
                            <Button classN='flex w-full items-center justify-center ' icon={<CiFacebook  className="mr-2"/>} text='Contiue with Facebook'  />
                        </div>
                        <div className="my-4">
                            <Button classN='flex w-full items-center justify-center ' icon={<FaApple   className="mr-2 tex-xl"/>} text='Contiue with Apple'  />
                        </div>
                    </div>

        {/* -------- */}<div className="text-xs">
{/*                         <p>
                            By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Grandhermes' <a href="#" className="underline">Terms of Use </a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p> */}
                        <br></br>
                        <p>
                            Grandhermes may send you communications; you may change your preferences in your account settings. We&apos;ll never post without your permission.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
