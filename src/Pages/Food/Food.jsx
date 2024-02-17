import "./food.css"
import Chainsoo from "../../assets/images/Food/Chainsoo.jpg";
import Card from "../../components/Card.jsx";

function Food() {
    console.log("Food Render");
    return (
        <section className={"food"}>
            <div className={"food-banner"}>
                <img
                    src="https://media.assettype.com/TNIE%2Fimport%2F2023%2F4%2F16%2Foriginal%2FBanner_Pyaz_ke_patte_ki_sabzi.jpg?auto=format%2Ccompress&fit=max&w=1200"
                    alt="" loading={"lazy"}/>
            </div>
            <div className={"food-description"}>
                <p>Uttarakhand's cuisine is a fine blend of organically-grown grains and vegetables. With several
                    lentil-based dishes, the pahadi (people of the mountains) cuisine is subtle in taste but high in
                    protein and other nutrients. It will be a sin to come here and not try its flavourful and healthy
                    food.
                    <br/>
                    <br/>
                    Uttarakhand cuisine is simple and similar to its people. The state cuisine is meticulously chosen to
                    not only offer the delight taste of buds but also to make most of the available resources. The
                    delicacies prepared in Uttarakhand simply exemplify the common phrase “the way to a man’s heart is
                    through his stomach”. You will be greeted by different aromas coming from roadside vendors while
                    walking through the road up to your favorite hill station in Uttarakhand. The food is prepared with
                    the spices right amount the dishes deeply connects to its people in Garhwal which only entices to
                    savour it. The mouth watering presentations are Jaula, Kaapa, Sisunaak Saag, Aaloo Gutuk, Dubke,
                    Chudkani and Thathwani meanwhile in Kumaon. Some of the fingers licking Gharwali dishes are
                    Chainsoo, Kafuli, Baadi, Jholi, Phanu, Gahat ke Paranthe, Thechwani and Roat. In Uttarakhand, the
                    side dishes are equally important.
                    <br/>
                    <br/>
                    Therefore, some of the sides that add to the main course flavor meals are prepared with Mooli
                    Thechuwa, utter care, Hara Namak and Bhangeera ki Chutney. The gastronomic journey concluding are
                    its melt in deserts of mouth which Singodi, Singal Puha, Baal Mithai and Jhangora ki Kheer are few
                    prelude in Uttarakhand. The most important attractions of a tour to Uttarakhand is added to this is
                    the amazing taste and nutritious of the cuisine of Uttarakhand. The cuisine of Uttarakhand, to say
                    the least, unconventional is strongly influenced by the geography of Uttarakhand. Which are the main
                    ingredients used in the cuisine found in and around the mountains, forests and lakes of Uttarakhand
                    with a number of vegetables, pulses and cereals availability which are rarely found in other parts
                    of the world.
                    <br/>
                    <br/>
                    Some of the most commonly food items are milk and a number of its products, influencing the cuisine
                    in numerous ways of Uttarakhand. More important items and some of the characteristic are Jhangora ki
                    Kheer, Kandalee ka Saag, Singal, Aloo ke Gutke, Kulath Phanu, Baal Mithai, Arsa, Gahat ki Dal, Rus,
                    Kaafli, Sani hui Muli, Gulgula and Singodi in the cuisine of Uttarakhand. In itself this cuisines
                    represent Uttarakhand with highlighting tradition and culture. Uttarakhand people are meticulous,
                    honest and courageous as we know about it. Owing to milk abundance are very fond of dairy product
                    are the food people of Garhwal also get change with season. These cuisine are among in pilgrims also
                    unique traditional very famous.
                </p>
            </div>

            <h1 className="explore-uttarakhand">Explore Local Food</h1>

            <div className="explore-card-list">
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Chainsoo"}                 link={"/food/chainsoo"}             img={Chainsoo}     imgDescription={"Chainsoo Image"}                />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Jholi"}                    link={"/food/jholi"}                img={Chainsoo}     imgDescription={"Jholi Image"}                   />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Pinau"}                    link={"/food/Pinau"}                img={Chainsoo}     imgDescription={"Pinau Image"}                   />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Arsa"}                     link={"/food/arsa"}                 img={Chainsoo}     imgDescription={"Arsa Image"}                    />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Roat"}                     link={"/food/roat"}                 img={Chainsoo}     imgDescription={"Roat Image"}                    />
                <Card description={"A traditional green vegetable dish made from spinach, fenugreek leaves, and other local greens..."}                            heading={"Kafuli"}                   link={"/food/kafuli"}               img={Chainsoo}     imgDescription={"Kafuli Image"}                  />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Alu tamatar ka jhol"}      link={"/food/alutamatarkajhol"}     img={Chainsoo}     imgDescription={"Alu tamatar ka jhol Image"}     />
                <Card description={"A curry made from potatoes, radishes, or other vegetables mashed and cooked with mustard oil and spices"}                      heading={"Thechwani"}                link={"/food/thechwani"}            img={Chainsoo}     imgDescription={"Thechwani Image"}               />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Dubuk"}                    link={"/food/dubuk"}                img={Chainsoo}     imgDescription={"Dubuk Image"}                   />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Sisunak Saag"}             link={"/food/sisunaksaag"}          img={Chainsoo}     imgDescription={"Sisunak Saag Image"}            />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Jhangora Ki Kheer"}        link={"/food/jhangorakikheer"}      img={Chainsoo}     imgDescription={"Jhangora Ki Kheer Image"}       />
                <Card description={"Spicy fried potatoes tempered with spices like cumin, mustard seeds, and asafoetida..."}                                       heading={"Aloo Ke Gutke"}            link={"/food/Alookegutke"}          img={Chainsoo}     imgDescription={"Aloo Ke Gutke Image"}           />
                <Card description={"Small dumplings made from wheat flour, usually served with dal or curry...."}                                                  heading={"Baadi"}                    link={"/food/baadi"}                img={Chainsoo}     imgDescription={"Baadi Image"}                   />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Til ki Chutney"}           link={"/food/tilkichutney"}         img={Chainsoo}     imgDescription={"Til ki Chutney Image"}          />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Bhang Ki Chutney"}         link={"/food/bhangkichutney"}       img={Chainsoo}     imgDescription={"Bhang Ki Chutney Image"}        />
                <Card description={"A traditional dish made from black soybeans cooked in a thick gravy..."}                                                       heading={"Bhatt ki Churdkani"}       link={"/food/bhattkichurdkani"}     img={Chainsoo}     imgDescription={"Bhatt ki Churdkani Image"}      />
                <Card description={"Flatbreads made from horse gram flour, often served with ghee..."}                                                             heading={"Gahat ke Paranthe"}        link={"/food/gahatkeparanthe"}      img={Chainsoo}     imgDescription={"Gahat ke Paranthe Image"}       />
                <Card description={"A sweet made from khoya (dried milk) and wrapped in malu leaves..."}                                                           heading={"Singodi"}                  link={"/food/singodi"}              img={Chainsoo}     imgDescription={"Singodi Image"}                 />
                <Card description={"A sweet made from roasted khoya, coated with sugar balls..."}                                                                  heading={"Bal Mithai"}               link={"/food/balmithai"}            img={Chainsoo}     imgDescription={"Bal Mithai Image"}              />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Mandua Roti"}              link={"/food/manduaroti"}           img={Chainsoo}     imgDescription={"Roat Image"}                    />
                <Card description={"A yogurt-based side dish flavored with roasted cumin seeds, green chilies, and coriander leaves..."}                           heading={"Kumaoni Raita"}            link={"/food/kumaoniraita"}         img={Chainsoo}     imgDescription={"Kumaoni Raita Image"}           />
                <Card description={"Made with gahat or chana dal, this lentils dish is a pahadi staple. It brings a taste of the mountains to your table.."}       heading={"Phaanu"}                   link={"/food/phaanu"}               img={Chainsoo}     imgDescription={"Phaanu Image"}                  />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Chana Madra"}              link={"/food/chanamadra"}           img={Chainsoo}     imgDescription={"Chana Madra Image"}             />
                <Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."}       heading={"Bhatwani"}                 link={"/food/bhatwani"}             img={Chainsoo}     imgDescription={"Bhatwani Image"}                />

                {/*<Card description={"Chainsoo is a delightful pahari recipe which is made by using kali dal. This dal recipe is exceptionally nutritious..."} heading={"Roat"} link={"/food/roat"} img={Chainsoo} imgDescription={"Roat Image"}/>*/}
                {/*<Card heading={""} description={""} link={""} img={""} imgDescription={""} />*/}
            </div>


        </section>
    );
}

export default Food;