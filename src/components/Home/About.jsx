import Container from "../Container";
import Title from "../Title";

export default function About({l}) {
    return (
        <div className="py-8 ">
            <Container>
                <Title>{l.hero.getToKnowMe}</Title>
                <div className="autoBlur" >
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.intro}
                    </p>
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.mission}
                    </p>
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.hobbies}
                    </p>
                </div>
            </Container>
        </div>
    );
}
