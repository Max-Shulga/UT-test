import {ReactElement} from "react";
import HomeHeader from "@/views/Home/HomeHeader";
import HomeFooter from "@/views/Home/HomeFooter";
import styles from './Home.module.scss'
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import AvatarCardsList from "@/views/Home/AvatarCardsList";
import SexSelector from "@/views/Home/SexSelector";
import Button from "@/components/Button/Button";
import {Link} from "react-router-dom";
import {useAppSelector} from "@/store/hooks";

function Home(): ReactElement {
    const {sex}= useAppSelector(state => state.auth)

    return (<section className={styles.homeContainer}>
        <HomeHeader/>
        <div className={styles.homeContentContainer}>
            <ProgressBar level={1}/>
            <h2>
                Glad you're here!
            </h2>
            <AvatarCardsList/>
            <SexSelector/>
            <Link to={sex ? '/sign-up' : '#'}>
            <Button
                onClick={() => {}}
                className={styles.button}

            >CONTINUE →</Button>
            </Link>
        </div>
        <HomeFooter/>
    </section>)
}

export default Home;
