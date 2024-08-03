import Button from "./Button";

const About = () => {
  const show = () => {
    let close = document.querySelector('#sign');

    close.style.display = 'inline-block';
  };
  return (
    <div>
        <div className="m-4 text-sm mt-16 mb-4">
            <h1 className="text-2xl font-medium my-4 w-full text-center">About GrandHermes</h1>
            <p>Welcome to GrandHermes, your ultimate destination for premium sexual tools, BDSM gear, and a wide array of pleasure-enhancing items and wear. At GrandHermes, we believe in the power of intimacy and the freedom to explore your desires in a safe, consensual, and satisfying manner.</p>
            <br /><h2 className="font-semibold text-sm mb-2 text-center">Our Mission</h2>
            <p>We provide a curated selection of high-quality products that cater to all levels of experience and interest. Whether you&apos;re new to the world of a seasoned enthusiast, GrandHermes offers something for everyone. We strive to create an inclusive and empowering environment where you can shop with confidence and excitement.</p>
            <br /><h2 className="font-semibold text-sm mb-2 text-center">Quality and Safety</h2>
            <p>We are committed to providing products that are not only pleasurable but also safe and reliable. Each item in our store is carefully selected based on its quality, functionality, and durability. Your satisfaction and safety are our top priorities.</p>

            <br /><br />
            <div className="w-full flex justify-center items-center"><Button onClick={show}  text='Read More About Grandhermes' classN={`underline mb-8 py-2 text-dimblack border-dimblackopacity hover:text-dimblackopacity cursor-pointer`} /></div>
        </div>
    </div>
  )
}

export default About
