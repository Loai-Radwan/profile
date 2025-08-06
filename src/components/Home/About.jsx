import Container from "../Container";
import Title from "../Title";

export default function About({l}) {
    return (
        <div className="py-8 ">
            <Container>
                <Title>{l.hero.getToKnowMe}</Title>
                <div>
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.intro}
                        {/* I'm a self-taught front-end developer with a strong passion for
                        coding and creativity. At just 17 years old, I'm already building
                        responsive, interactive websites using HTML, CSS, JavaScript, and
                        modern tools like React, Tailwind CSS, Sass, and Bootstrap. */}

                    </p>
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.mission}

                        {/* turning ideas into real projects—whether it's designing a smooth
                        user interface, adding animations, or solving problems with code.
                        I'm currently on a journey to become a full stack developer, and I'm
                        always learning new technologies and improving my skills through
                        online courses, documentation, and hands-on practice. */}
                    </p>
                    <p className="w-[90%] leading-7 text-[var(--text-color)]/70 my-4 mx-auto">
                    {l.hero.hobbies}
{/* 
                         Outside of
                        coding, I enjoy experimenting with design, helping others with tech,
                        and contributing to personal and creative web projects. */}
                    </p>
                </div>
            </Container>
        </div>
    );
}
