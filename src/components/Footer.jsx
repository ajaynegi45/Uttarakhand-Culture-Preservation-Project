import "./footer.css";
import forest from "../assets/forest.svg";
import forestMin from "../assets/forest.webp";
import {Link} from "react-router-dom";
import {useEffect} from "react";
function Footer() {
    useEffect(() => {
        function isSafari() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }

        if (isSafari()) {
            const carouselWrapper = document.getElementById('footer-image');
            if (carouselWrapper) {
                carouselWrapper.classList.remove('footer-image');
            }
        }
    }, []);

    return (
        <footer>
            <div className={"footer-image-container"}>

                <picture>
                    <source media="(max-width: 500px)" srcSet={forestMin}/>
                    <img id={"footer-image"} className={"footer-image"}
                        src={forest}
                        alt={"Forest Image"} loading="lazy"
                         decoding="async"
                    />
                </picture>

            </div>
            <div className={"footer-section"}>
                <div className={"footer-content"}>
                    <Link to={"/"}>
                        <h1>UK Culture</h1>
                        <p className={"footer-content-about"}>Our aim is to ensure that this invaluable heritage is
                            passed down to future generations.</p>
                    </Link>
                    <div className={"footer-icon-list"}>
                        <Link to={"https://github.com/ajaynegi45/Uttarakhand-Culture-Preservation-Project"}><img
                            alt="svgImg" className={"footer-icon"} loading="lazy" decoding="async"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNCIgeTE9IjIzLjUwOCIgeDI9IjQ0IiB5Mj0iMjMuNTA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfQVpPWk5uWTczaGFqX2dyMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNGM0YzRjIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMzQzNDM0Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjMzMzMzLDUuMzMzMzMpIj48cGF0aCBkPSJNMjQsNGMtMTEuMDQ2LDAgLTIwLDguOTU0IC0yMCwyMGMwLDguODg3IDUuODAxLDE2LjQxMSAxMy44MiwxOS4wMTZoMTIuMzZjOC4wMTksLTIuNjA1IDEzLjgyLC0xMC4xMjkgMTMuODIsLTE5LjAxNmMwLC0xMS4wNDYgLTguOTU0LC0yMCAtMjAsLTIweiIgZmlsbD0idXJsKCNjb2xvci0xX0FaT1pOblk3M2hhal9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTMwLjAxLDQxLjk5NmwtMC4wMSwtNS43OThjMCwtMC45MzkgLTAuMjIsLTEuODU2IC0wLjY0MiwtMi42ODdjNS42NDEsLTEuMTMzIDguMzg2LC00LjQ2OCA4LjM4NiwtMTAuMTc3YzAsLTIuMjU1IC0wLjY2NSwtNC4yNDYgLTEuOTc2LC01LjkyYzAuMSwtMC4zMTcgMC4xNzQsLTAuNjQ1IDAuMjIsLTAuOTgxYzAuMTg4LC0xLjM2OSAtMC4wMjMsLTIuMjY0IC0wLjE5MywtMi45ODRsLTAuMDI3LC0wLjExNmMtMC4xODYsLTAuNzk2IC0wLjQwOSwtMS4zNjQgLTAuNDE4LC0xLjM4OGwtMC4xMTEsLTAuMjgybC0wLjExMSwtMC4yODJsLTAuMzAyLC0wLjAzMmwtMC4zMDMsLTAuMDMyYzAsMCAtMC4xOTksLTAuMDIxIC0wLjUwMSwtMC4wMjFjLTAuNDE5LDAgLTEuMDQsMC4wNDIgLTEuNjI3LDAuMjQxbC0wLjE5NiwwLjA2NmMtMC43NCwwLjI0OSAtMS40MzksMC40ODUgLTIuNDE3LDEuMDY5Yy0wLjI4NiwwLjE3MSAtMC41OTksMC4zNjYgLTAuOTM0LDAuNTg0Yy0xLjUxNCwtMC4zNzUgLTMuMTQzLC0wLjU2NiAtNC44NDgsLTAuNTY2Yy0xLjcyMiwwIC0zLjM2NSwwLjE5MiAtNC44ODksMC41NzFjLTAuMzM5LC0wLjIyIC0wLjY1NCwtMC40MTcgLTAuOTQyLC0wLjU4OWMtMC45NzgsLTAuNTg0IC0xLjY3NywtMC44MTkgLTIuNDE3LC0xLjA2OWwtMC4xOTYsLTAuMDY2Yy0wLjU4NSwtMC4xOTkgLTEuMjA3LC0wLjI0MSAtMS42MjYsLTAuMjQxYy0wLjMwMiwwIC0wLjUwMSwwLjAyMSAtMC41MDEsMC4wMjFsLTAuMzAyLDAuMDMybC0wLjMsMC4wMzFsLTAuMTEyLDAuMjgxbC0wLjExMywwLjI4M2MtMC4wMSwwLjAyNiAtMC4yMzMsMC41OTQgLTAuNDE5LDEuMzkxbC0wLjAyNywwLjExNWMtMC4xNywwLjcxOSAtMC4zODEsMS42MTUgLTAuMTkzLDIuOTgzYzAuMDQ4LDAuMzQ2IDAuMTI1LDAuNjg1IDAuMjMsMS4wMTFjLTEuMjg1LDEuNjY2IC0xLjkzNiwzLjY0NiAtMS45MzYsNS44OWMwLDUuNjk1IDIuNzQ4LDkuMDI4IDguMzk3LDEwLjE3Yy0wLjE5NCwwLjM4OCAtMC4zNDUsMC43OTggLTAuNDUyLDEuMjI0Yy0wLjE5NywwLjA2NyAtMC4zNzgsMC4xMTIgLTAuNTM4LDAuMTM3Yy0wLjIzOCwwLjAzNiAtMC40ODcsMC4wNTQgLTAuNzM5LDAuMDU0Yy0wLjY4NiwwIC0xLjIyNSwtMC4xMzQgLTEuNDM1LC0wLjI1OWMtMC4zMTMsLTAuMTg2IC0wLjg3MiwtMC43MjcgLTEuNDE0LC0xLjUxOGMtMC40NjMsLTAuNjc1IC0xLjE4NSwtMS41NTggLTEuOTkyLC0xLjkyN2MtMC42OTgsLTAuMzE5IC0xLjQzNywtMC41MDIgLTIuMDI5LC0wLjUwMmMtMC4xMzgsMCAtMC4yNjUsMC4wMSAtMC4zNzYsMC4wMjhjLTAuNTE3LDAuMDgyIC0wLjk0OSwwLjM2NiAtMS4xODQsMC43OGMtMC4yMDMsMC4zNTcgLTAuMjM1LDAuNzczIC0wLjA4OCwxLjE0MWMwLjIxOSwwLjU0OCAwLjg1MSwwLjk4NSAxLjM0MywxLjI1NWMwLjI0MiwwLjEzMyAwLjc2NSwwLjYxOSAxLjA3LDEuMTA5YzAuMjI5LDAuMzY4IDAuMzM1LDAuNjMgMC40ODIsMC45OTJjMC4wODcsMC4yMTUgMC4xODMsMC40NDkgMC4zMTMsMC43MzJjMC40NywxLjAyMiAxLjkzNywxLjkyNCAyLjEwMywyLjAyM2MwLjgwNiwwLjQ4MyAyLjE2MSwwLjYzOCAzLjE1NywwLjY4M2wwLjEyMywwLjAwM2gwLjAwMWMwLjI0LDAgMC41NywtMC4wMjMgMS4wMDQsLTAuMDcxdjIuNjEzYzAuMDAyLDAuNTI5IC0wLjUzNywwLjY0OSAtMS4yNSwwLjYzOGwwLjU0NywwLjE4NGMyLjA5NSwwLjc0OSA0LjM0NSwxLjE3NyA2LjcsMS4xNzdjMi4zNTUsMCA0LjYwNSwtMC40MjggNi43MDMsLTEuMTc2bDAuNzAzLC0wLjI2MmMtMC43MTEsLTAuMDI0IC0xLjM5LC0wLjE0IC0xLjM5NiwtMC41NjZ6IiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjA1Ij48L3BhdGg+PHBhdGggZD0iTTMwLjc4MSw0Mi43OTdjLTAuNDA2LDAuMDQ3IC0xLjI4MSwtMC4xMDkgLTEuMjgxLC0wLjc5NXYtNS44MDRjMCwtMS4wOTQgLTAuMzI4LC0yLjE1MSAtMC45MzYsLTMuMDUyYzUuOTE1LC0wLjk1NyA4LjY3OSwtNC4wOTMgOC42NzksLTkuODEyYzAsLTIuMjM3IC0wLjY4NiwtNC4xOTQgLTIuMDM5LC01LjgyMmMwLjEzNywtMC4zNjUgMC4yMzMsLTAuNzUgMC4yODgsLTEuMTQ3YzAuMTc1LC0xLjI3NiAtMC4wMTYsLTIuMDg2IC0wLjE4NCwtMi44MDFsLTAuMDI3LC0wLjExNmMtMC4xNzgsLTAuNzYxIC0wLjM4OCwtMS4yOTcgLTAuMzk3LC0xLjMxOWwtMC4xMTEsLTAuMjgybC0wLjMwMywtMC4wMzJjMCwwIC0wLjE3OCwtMC4wMTkgLTAuNDQ5LC0wLjAxOWMtMC4zODEsMCAtMC45NDQsMC4wMzcgLTEuNDY2LDAuMjE1bC0wLjE5NiwwLjA2NmMtMC43MTQsMC4yNDEgLTEuMzg5LDAuNDY4IC0yLjMyMSwxLjAyNGMtMC4zMzIsMC4xOTggLTAuNzAyLDAuNDMxIC0xLjEwMSwwLjY5NGMtMS41MzMsLTAuNDAxIC0zLjE5MiwtMC42MDUgLTQuOTM3LC0wLjYwNWMtMS43NjIsMCAtMy40MzUsMC4yMDUgLTQuOTc5LDAuNjFjLTAuNDAzLC0wLjI2NSAtMC43NzUsLTAuNDk5IC0xLjEwOSwtMC42OTljLTAuOTMyLC0wLjU1NiAtMS42MDcsLTAuNzg0IC0yLjMyMSwtMS4wMjRsLTAuMTk2LC0wLjA2NmMtMC41MjEsLTAuMTc3IC0xLjA4NSwtMC4yMTUgLTEuNDY2LC0wLjIxNWMtMC4yNzEsMCAtMC40NDksMC4wMTkgLTAuNDQ5LDAuMDE5bC0wLjMwMiwwLjAzMmwtMC4xMTMsMC4yODNjLTAuMDA5LDAuMDIyIC0wLjIxOSwwLjU1OCAtMC4zOTcsMS4zMTlsLTAuMDI3LDAuMTE2Yy0wLjE2OSwwLjcxNSAtMC4zNiwxLjUyNCAtMC4xODQsMi44YzAuMDU2LDAuNDA3IDAuMTU2LDAuODAxIDAuMjk4LDEuMTc0Yy0xLjMyNywxLjYyIC0xLjk5OSwzLjU2NyAtMS45OTksNS43OTVjMCw1LjcwMyAyLjc2Niw4LjgzOCA4LjY4Niw5LjgwNmMtMC4zOTUsMC41OSAtMC42NzEsMS4yNTUgLTAuODEzLDEuOTY0Yy0wLjMzLDAuMTMgLTAuNjI5LDAuMjE2IC0wLjg5MSwwLjI1NmMtMC4yNjMsMC4wNCAtMC41MzcsMC4wNiAtMC44MTQsMC4wNmMtMC42OSwwIC0xLjM1MywtMC4xMjkgLTEuNjksLTAuMzI5Yy0wLjQ0LC0wLjI2MSAtMS4wNTcsLTAuOTE0IC0xLjU3MiwtMS42NjVjLTAuMzUsLTAuNTEgLTEuMDQ3LC0xLjQxNyAtMS43ODgsLTEuNzU1Yy0wLjYzNSwtMC4yOSAtMS4yOTgsLTAuNDU3IC0xLjgyMSwtMC40NTdjLTAuMTEsMCAtMC4yMSwwLjAwOCAtMC4yOTgsMC4wMjJjLTAuMzY2LDAuMDU4IC0wLjY2OCwwLjI1MiAtMC44MjgsMC41MzRjLTAuMTI4LDAuMjI0IC0wLjE0OSwwLjQ4MyAtMC4wNTksMC43MDhjMC4xNzksMC40NDggMC44NDIsMC44NSAxLjExOSwxLjAwMmMwLjMzNSwwLjE4NCAwLjkxOSwwLjc0NCAxLjI1NCwxLjI4NGMwLjI1MSwwLjQwNCAwLjM3LDAuNjk3IDAuNTIxLDEuMDY3YzAuMDg1LDAuMjA5IDAuMTc4LDAuNDM3IDAuMzA0LDAuNzEyYzAuMzMxLDAuNzE5IDEuMzUzLDEuNDcyIDEuOTA1LDEuODAzYzAuNzU0LDAuNDUyIDIuMTU0LDAuNTc4IDIuOTIyLDAuNjEybDAuMTExLDAuMDAyYzAuMjk5LDAgMC44LC0wLjA0NSAxLjQ5NSwtMC4xMzV2My4xNzdjMCwwLjc3OSAtMC45OTEsMC44MSAtMS4yMzQsMC44MWMtMC4wMzEsMCAwLjUwMywwLjE4NCAwLjUwMywwLjE4NGMxLjk2MywwLjY0NCA0LjA1NCwxLjAwNCA2LjIzMiwxLjAwNGMyLjE3OCwwIDQuMjY5LC0wLjM2IDYuMjMxLC0xLjAwM2MwLDAgMC41ODEsLTAuMjA0IDAuNTUsLTAuMnoiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMDciPjwvcGF0aD48cGF0aCBkPSJNMzYuNzQ0LDIzLjMzNGMwLC0yLjMxIC0wLjc4MiwtNC4yMjYgLTIuMTE3LC01LjcyOGMwLjE0NSwtMC4zMjUgMC4yOTYsLTAuNzYxIDAuMzcxLC0xLjMwOWMwLjE3MiwtMS4yNSAtMC4wMzEsLTIgLTAuMjAzLC0yLjczNGMtMC4xNzIsLTAuNzM0IC0wLjM3NSwtMS4yNSAtMC4zNzUsLTEuMjVjMCwwIC0wLjkyMiwtMC4wOTQgLTEuNzAzLDAuMTcyYy0wLjc4MSwwLjI2NiAtMS40NTMsMC40NjkgLTIuNDIyLDEuMDQ3Yy0wLjQ1MywwLjI3IC0wLjkwOSwwLjU2NiAtMS4yNywwLjgwNmMtMS41NDMsLTAuNDI4IC0zLjI0LC0wLjY0OCAtNS4wMjUsLTAuNjQ4Yy0xLjgwMSwwIC0zLjUxMywwLjIyMSAtNS4wNjcsMC42NTJjLTAuMzYyLC0wLjI0MSAtMC44MjEsLTAuNTM5IC0xLjI3NywtMC44MTFjLTAuOTY5LC0wLjU3OCAtMS42NDEsLTAuNzgxIC0yLjQyMiwtMS4wNDdjLTAuNzgxLC0wLjI2NiAtMS43MDMsLTAuMTcyIC0xLjcwMywtMC4xNzJjMCwwIC0wLjIwMywwLjUxNiAtMC4zNzUsMS4yNWMtMC4xNzIsMC43MzQgLTAuMzc1LDEuNDg0IC0wLjIwMywyLjczNGMwLjA3NywwLjU2MiAwLjIzMywxLjAwNiAwLjM4MiwxLjMzM2MtMS4zMSwxLjQ5MyAtMi4wNzgsMy4zOTcgLTIuMDc4LDUuNzA0YzAsNS45ODMgMy4yMzIsOC43MTQgOS4xMjEsOS40MzVjLTAuNjg3LDAuNzI2IC0xLjE0OCwxLjY1NiAtMS4zMDMsMi42OTFjLTAuMzg3LDAuMTcgLTAuODMzLDAuMzMgLTEuMjYyLDAuMzk0Yy0xLjEwNCwwLjE2NyAtMi4yNzEsMCAtMi44MzMsLTAuMzMzYy0wLjU2MiwtMC4zMzMgLTEuMjI5LC0xLjA4MyAtMS43MjksLTEuODEzYy0wLjQyMiwtMC42MTYgLTEuMDMxLC0xLjMzMSAtMS41ODMsLTEuNTgzYy0wLjcyOSwtMC4zMzMgLTEuNDM4LC0wLjQ1OCAtMS44MzMsLTAuMzk2Yy0wLjM5NiwwLjA2MyAtMC41ODMsMC4zNTQgLTAuNSwwLjU2M2MwLjA4MywwLjIwOCAwLjQ3OSwwLjUyMSAwLjg5NiwwLjc1YzAuNDE3LDAuMjI5IDEuMDYzLDAuODU0IDEuNDM4LDEuNDU4YzAuNDE4LDAuNjc0IDAuNSwxLjA2MyAwLjg1NCwxLjgzM2MwLjI0OSwwLjU0MiAxLjEwMSwxLjIxOSAxLjcwOCwxLjU4M2MwLjUyMSwwLjMxMyAxLjU2MiwwLjQ5MSAyLjY4OCwwLjU0MmMwLjM4OSwwLjAxOCAxLjMwOCwtMC4wOTYgMi4wODMsLTAuMjA2djMuNzVjMCwwLjYzOSAtMC41ODUsMS4xMjUgLTEuMTkxLDEuMDEzYzEuOTQ1LDAuNjU0IDQuMDIyLDAuOTg2IDYuMTg5LDAuOTg2YzIuMTY2LDAgNC4yNDMsLTAuMzMyIDYuMTksLTAuOTg0Yy0wLjYwNSwwLjExMSAtMS4xOSwtMC4zNzUgLTEuMTksLTEuMDE0di01LjgwNGMwLC0xLjMyOSAtMC41MjcsLTIuNTMgLTEuMzczLC0zLjQyNWM1Ljg0NiwtMC43MDIgOS4xMTcsLTMuMzY4IDkuMTE3LC05LjQzOXpNMTEuMjM5LDMyLjcyN2MtMC4xNTQsLTAuMDc5IC0wLjIzNywtMC4yMjUgLTAuMTg1LC0wLjMyOGMwLjA1MiwtMC4xMDMgMC4yMiwtMC4xMjIgMC4zNzQsLTAuMDQzYzAuMTU0LDAuMDc5IDAuMjM3LDAuMjI1IDAuMTg1LDAuMzI4Yy0wLjA1MiwwLjEwMyAtMC4yMiwwLjEyMiAtMC4zNzQsMC4wNDN6TTEyLjQ1MSwzMy40ODJjLTAuMDgxLDAuMDg4IC0wLjI1NSwwLjA2IC0wLjM4OSwtMC4wNjJjLTAuMTM0LC0wLjEyMiAtMC4xNzcsLTAuMjkzIC0wLjA5NiwtMC4zODFjMC4wODEsLTAuMDg4IDAuMjU1LC0wLjA2IDAuMzg5LDAuMDYyYzAuMTM0LDAuMTIyIDAuMTc3LDAuMjkzIDAuMDk2LDAuMzgxek0xMy4yMDUsMzQuNzMyYy0wLjEwMiwwLjA3MiAtMC4yNzUsMC4wMDUgLTAuMzg2LC0wLjE1Yy0wLjExMSwtMC4xNTUgLTAuMTE4LC0wLjM0IC0wLjAxNiwtMC40MTJjMC4xMDIsLTAuMDcyIDAuMjc1LC0wLjAwNSAwLjM4NiwwLjE1YzAuMTEsMC4xNTUgMC4xMTgsMC4zNCAwLjAxNiwwLjQxMnpNMTQuMjg4LDM1LjY3M2MtMC4wNjksMC4xMTIgLTAuMjY1LDAuMTE3IC0wLjQzNywwLjAxMmMtMC4xNzIsLTAuMTA1IC0wLjI1NiwtMC4yODEgLTAuMTg3LC0wLjM5M2MwLjA2OSwtMC4xMTIgMC4yNjUsLTAuMTE3IDAuNDM3LC0wLjAxMmMwLjE3MiwwLjEwNSAwLjI1NiwwLjI4MSAwLjE4NywwLjM5M3pNMTUuMzEyLDM2LjU5NGMtMC4yMTMsLTAuMDI2IC0wLjM3MSwtMC4xNTkgLTAuMzUzLC0wLjI5N2MwLjAxNywtMC4xMzggMC4yMDQsLTAuMjI4IDAuNDE2LC0wLjIwMmMwLjIxMywwLjAyNiAwLjM3MSwwLjE1OSAwLjM1MywwLjI5N2MtMC4wMTcsMC4xMzcgLTAuMjAzLDAuMjI4IC0wLjQxNiwwLjIwMnpNMTYuOTYzLDM2LjgzM2MtMC4yMjcsLTAuMDEzIC0wLjQwNCwtMC4xNDMgLTAuMzk1LC0wLjI4OWMwLjAwOSwtMC4xNDYgMC4yLC0wLjI1NSAwLjQyNywtMC4yNDJjMC4yMjcsMC4wMTMgMC40MDQsMC4xNDMgMC4zOTUsMC4yODljLTAuMDA5LDAuMTQ3IC0wLjIsMC4yNTUgLTAuNDI3LDAuMjQyek0xOC41MjEsMzYuNjc3Yy0wLjI0MiwwIC0wLjQzOCwtMC4xMjYgLTAuNDM4LC0wLjI4MWMwLC0wLjE1NSAwLjE5NiwtMC4yODEgMC40MzgsLTAuMjgxYzAuMjQyLDAgMC40MzgsMC4xMjYgMC40MzgsMC4yODFjMCwwLjE1NSAtMC4xOTcsMC4yODEgLTAuNDM4LDAuMjgxeiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/></Link>
                        <Link to={"https://www.linkedin.com/in/ajaynegi45/"}><img alt="svgImg" className={"footer-icon"}
                                                                                  loading="lazy" decoding="async"
                                                                                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4="/></Link>
                        <Link to={"https://twitter.com/ajaynegi45"}><img alt="svgImg" className={"footer-icon"}
                                                                         loading="lazy" decoding="async"
                                                                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTUuOTE5OTIsNmwxNC42NjIxMSwyMS4zNzVsLTE0LjM1MTU2LDE2LjYyNWgzLjE3OTY5bDEyLjU3NjE3LC0xNC41NzgxMmwxMCwxNC41NzgxM2gxMi4wMTM2N2wtMTUuMzE4MzYsLTIyLjMzMDA4bDEzLjUxNzU4LC0xNS42Njk5MmgtMy4xNjk5MmwtMTEuNzUzOTEsMTMuNjE3MTlsLTkuMzQxOCwtMTMuNjE3MTl6TTkuNzE2OCw4aDcuMTY0MDZsMjMuMzIyMjcsMzRoLTcuMTY0MDZ6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/></Link>
                        <Link to={"https://www.buymeacoffee.com/ajaynegi"} target={"\"_blank\""}>
                            <img className={"footer-icon"}
                                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
                                style={{height:"40px",width: "150px"  }}
                            />
                        </Link>
                    </div>
                </div>
                <div className={"footer-content footer-content-links"}>
                    <p>Explore Uttarakhand</p>
                    <ul>
                    <li><Link to={"/language"}><img loading="lazy" decoding="async"
                                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                        alt="Chevron forward icon"
                                                        className={"Chevron"}/>Language</Link>
                        </li>
                        <li><Link to={"/food"}><img loading="lazy" decoding="async"
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                    alt="Chevron forward icon" className={"Chevron"}/>Food</Link>
                        </li>
                        <li><Link to={"/temple"}><img loading="lazy" decoding="async"
                                                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                      alt="Chevron forward icon" className={"Chevron"}/>Temple</Link>
                        </li>
                        <li><Link to={"/jewellery"}><img loading="lazy" decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                alt="Chevron forward icon" className={"Chevron"}/>Jewellery</Link></li>
                        <li><Link to={"/dance"}><img loading="lazy" decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                alt="Chevron forward icon" className={"Chevron"}/>Dance</Link>
                        </li>
                        <li><Link to={"/music"}><img loading="lazy" decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                alt="Chevron forward icon" className={"Chevron"}/>Music</Link>
                        </li>
                        <li><Link to={"/architecture"}><img loading="lazy" decoding="async"
                                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                alt="Chevron forward icon" className={"Chevron"}/>Architecture</Link>
                        </li>
                    </ul>
                </div>
                <div className={"footer-content footer-content-links"}>
                    <p>Useful Links</p>
                    <ul>
                        <li><Link to={"about"}><img loading="lazy" decoding="async"
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                    alt="Chevron forward icon" className={"Chevron"}/>About
                            Us</Link></li>
                        <li><Link to={"/contact"}><img loading="lazy" decoding="async"
                                                       src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                       alt="Chevron forward icon" className={"Chevron"}/>Contact
                            Us</Link></li>
                        <li><Link to={"contribution"}><img loading="lazy" decoding="async"
                                                           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                           alt="Chevron forward icon" className={"Chevron"}/>Want
                            to contribute</Link></li>
                        <li><Link to={"contributors"}><img loading="lazy" decoding="async"
                                                           src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjQ4cHgiIGQ9Im0xODQgMTEyIDE0NCAxNDQtMTQ0IDE0NCIvPgo8L3N2Zz4K"
                                                           alt="Chevron forward icon" className={"Chevron"}/>Contributors</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/*<script data-name="BMC-Widget" data-cfasync="false"*/}
            {/*        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="ajaynegi"*/}
            {/*        data-description="Support me on Buy me a coffee!" data-message="" data-color="#40DCA5"*/}
            {/*        data-position="Right" data-x_margin="18" data-y_margin="18">*/}
            {/*    */}
            {/*</script>*/}

            <div className={"foot-note"}>
                <p>Developed with ❤️ by Ajay Negi</p>
                <p>©️ {(new Date().getFullYear())} UK Culture</p>
            </div>
        </footer>
    );
}

export default Footer;