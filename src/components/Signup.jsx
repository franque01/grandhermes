import Button from "./Button";
import Input from "./Input";
import { IoClose, FcGoogle, FaApple, CiFacebook } from "./Fonts";


const Signup = () => {
    const close = () => {
        let close = document.querySelector('#sign');

        close.style.display = 'none';
    };

    const showReg = () => {
        let showR = document.querySelector('#Reg');

        showR.style.display = 'inline-block';
        close();
    };

  return (
    <div id="sign" className="hidden transition-all ease-in-out duration-500 z-50">
        <div className="fixed top-0 bg-dimblackopacity min-h-dvh h-full w-full flex items-center justify-center overflow-y-scroll z-50">
            <div className="mt-80">
                <div className="flex items-end justify-end">
                    <a href="#" ><IoClose className="text-2xl text-white my-6" onClick={close} /></a>
                </div>
                <div className=" max-w-md bg-white p-5 rounded-lg mb-8">
    {/* -------- */}<div >
                        <div className="flex justify-between my-2"><h1 className="font-medium text-xl">Sing in</h1><Button onClick={showReg} text='Register' link="#" /></div>
                        <div>
                            <div className="my-4">
                                <label>Email address</label>
                                <Input placeholder='Email address' />
                            </div>
                            <div className="my-4">
                                <label>Password</label>
                                <Input type='password' placeholder='Password' />
                            </div>
                        </div>
                    </div>  {/* end of input line */}

    {/* -------- */}<div className="flex justify-between my-4">
                        <span ><input type='checkbox' className="cursor-pointer" /> Stay signed in</span>
                        <button><a href="#" className="underline text-sm">Forgot Password?</a></button>
                    </div>

    {/* -------- */}<div className="sign-btn my-4">
                        <Button icon text='Sign in' classN='w-full py-2 bg-primary border-0 text-secondary' />
                    </div>

    {/* -------- */} <div className="w-full flex my-4"><span className="underline text-center w-full">Trouble signing in?</span></div>

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

    {/* -------- */}<div className="text-sm">
                        <p>
                            By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Grandhermes&apos; <a href="#" className="underline">Terms of Use </a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                        <br></br>
                        <p>
                            Grandhermes may send you communications; you may change your preferences in your account settings. We&apos;ll never post without your permission.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Signup
