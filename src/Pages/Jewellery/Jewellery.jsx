import Card from "../../components/Card.jsx";
import "./jewellery.css"
import Bulaq from "../../assets/Jewellery/Bhulaq.png";
import Byhung from "../../assets/Jewellery/Byhung.png"
function Jewellery() {
    return (
        <div className={"jewellery-container"}>
            <div className={"jewellery-header"}>
                <img src="https://ukacademe.com/Images/UKPedia/CultureAndReligion/Header_Bulakh_1557369910.jpg"
                     alt="Jewellery Image"/>
            </div>
            <div>

            </div>

            <h1 className="explore-uttarakhand-title">Explore Uttarakhand Jewellery</h1>

            <div className={"jewellery-list"}>

                <Card heading={"Hansuli"}       description={""}    link={"/hansuli"} img={"https://images.herzindagi.info/image/2019/Oct/hansuli-are-still-a-big-fashion-statement-inside-three.jpg"} imgDescription={"Hansuli Image"}/>

                <Card heading={"Nathuli"}       description={""}    link={"/nathuli"} img={"https://joshimilestoner.com/wp-content/uploads/2023/09/NATH-KUMAONI.webp"} imgDescription={"Nathuli Image"}/>

                <Card heading={"Bulaq"}         description={"Bulaq is an exquisite jewellery which i sworn at the nasal septim"} link={"/bulaq"} img={Bulaq} imgDescription={"Bulaq Image"}/>

                <Card heading={"Kaanphool"}     description={""}            link={"/kaanphool"} img={""} imgDescription={"Kaanphool Image"}/>

                <Card heading={"Poji"}          description={""}            link={"/poji"} img={"https://ejaa.in/cdn/shop/products/2--PH-3.20a.jpg?v=1671179097&width=990"} imgDescription={"Poji Image"}/>

                <Card heading={"Galobandh"}     description={""}            link={"/galobandh"} img={"https://www.euttarakhand.com/wp-content/uploads/2016/10/IMG_3418.jpg"} imgDescription={"Galobandh Image"}/>

                <Card heading={"Jajeer"}        description={""}            link={"/jajeer"} img={"https://museumofmaterialmemory.com/wp-content/uploads/2020/03/IMG_4513.jpg"} imgDescription={" Jajeer Image"}/>

                <Card heading={"Chareu"}        description={""}            link={"/chareu"} img={""} imgDescription={"Chareu Image"}/>

                <Card heading={"Tagdi"}         description={""}            link={"/tagdi"} img={"https://museumofmaterialmemory.com/wp-content/uploads/2019/01/IMG_9627.jpg"} imgDescription={"Tagdi Image"}/>

                <Card heading={"Habel"}         description={""}            link={"/habel"} img={"https://www.sahapedia.org/sites/default/files/styles/sp_inline_images/public/users/user3337/Hasuli%20,Sutia-2.jpg"} imgDescription={"Habel Image"}/>

                <Card heading={"Bheej"}         description={"Kaldaar"}     link={"/bheej"} img={"https://d1rezxi0gcra7v.cloudfront.net/zerokaata-studio/wp-content/uploads/2018/06/2.jpg"} imgDescription={"Bheej Image"}/>

                <Card heading={"Timaniya"}      description={""}            link={"/timaniya"} img={""} imgDescription={"Timaniya Image"}/>

                <Card heading={"Thuauk"}        description={""}            link={"/thuauk"} img={"https://cdn.shopify.com/s/files/1/0102/3757/5264/files/IMG_7946_large.JPG?v=1563723531"} imgDescription={"Thuauk Image"}/>

                <Card heading={"Pach Ladi"}     description={""}            link={"/pachladi"} img={"https://cdn.shopify.com/s/files/1/0102/3757/5264/files/IMG_1404_copy_large.JPG?v=1563723657"} imgDescription={"Pach Ladi Image"}/>

                <Card heading={"Dhagul"}        description={""}            link={"/dhagul"} img={"https://cdn.shopify.com/s/files/1/0102/3757/5264/files/IMG_8807_large.JPG?v=1563723458"} imgDescription={"Dhagul Image"}/>

                <Card heading={"Bichhuwa"}      description={""}            link={"/bichhuwa"} img={"https://d1rezxi0gcra7v.cloudfront.net/zerokaata-studio/wp-content/uploads/2018/06/9.jpg"} imgDescription={"Bichhuwa Image"}/>

                <Card heading={"Murkhali"}      description={""}            link={"/murkhali"} img={""} imgDescription={"Murkhali Image"}/>

                <Card heading={"Byhung"}        description={""}            link={"/byhung"} img={Byhung} imgDescription={"Byhung Image"}/>

                <Card heading={"Munedi"}        description={"Ring"}        link={"/munedi"} img={"https://s3.ap-south-1.amazonaws.com/manicad.in/category/644106737c6df979c50df737/home_category_square_image/blob_1681983091.?w=350px"} imgDescription={"Munedi Image"}/>

            {/* https://totapari.com/blogs/news/jewellery-from-the-lands-of-kumaon-himalayas */}

            </div>

        </div>
    );
}

export default Jewellery;