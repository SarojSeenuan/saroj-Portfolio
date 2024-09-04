import React from 'react';
import styled from 'styled-components';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaWindows,
} from 'react-icons/fa';

const AboutContainer = styled.div`
    padding: 100px 50px;
    background: #2e2e2e; /* Dark background */
    color: white;
    min-height: 100vh;
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    img {
        border-radius: 50%;
        width: 275px;
        height: 270px;
        margin-right: 50px;
    }

    div {
        h2 {
            margin-bottom: 10px;
            font-size: 2.5rem;
        }

        p {
            max-width: 600px;
            font-size: 1.2rem;
        }
    }
`;

const QuoteSection = styled.div`
    margin-bottom: 50px;
    font-style: italic;
    font-size: 1.5rem; /* Larger font size for quote */
    text-align: center;
    border-left: 4px solid #f0a500;
    padding-left: 20px;
`;

const SkillsSection = styled.div`
    margin-bottom: 50px;

    h3 {
        margin-bottom: 20px;
        font-size: 2rem;
    }

    .skills {
        display: flex;
        flex-wrap: wrap;

        .skill {
            display: flex;
            align-items: center;
            margin-right: 20px;
            margin-bottom: 20px;
            font-size: 1.5rem;
            padding: 10px;
            background: #1e1e1e;
            border-radius: 8px;

            svg {
                margin-right: 8px;
                color: #f0a500;
            }
        }
    }
`;

const DetailsSection = styled.div`
    margin-bottom: 50px;

    h3 {
        margin-bottom: 20px;
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
            font-size: 1.2rem;
        }

        li:before {
            content: '•';
            color: #f0a500;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <ProfileSection>
                <img src="/asset/img/saroj.jpg" alt="Saroj Senuan" />
                <div>
                    <h2>Saroj Senuan</h2>
                    <p>
                        Hello! I'm Saroj Senuan, a passionate full-stack
                        developer with expertise in JavaScript and a strong
                        foundation in various technologies. I love creating
                        dynamic and responsive web applications that provide
                        excellent user experiences.
                    </p>
                </div>
            </ProfileSection>

            <QuoteSection>
                "Striving for excellence and innovation, one line of code at a
                time."
            </QuoteSection>

            <SkillsSection>
                <h3>Skills</h3>
                <div className="skills">
                    <div className="skill">
                        <FaHtml5 /> HTML
                    </div>
                    <div className="skill">
                        <FaCss3Alt /> CSS
                    </div>
                    <div className="skill">
                        <FaJs /> JavaScript
                    </div>
                    <div className="skill">
                        <FaReact /> React
                    </div>
                    <div className="skill">
                        <FaJava /> Java
                    </div>
                    <div className="skill">
                        <FaWindows /> VB.NET
                    </div>
                </div>
            </SkillsSection>

            <DetailsSection>
                <h3>More About Me</h3>
                <p>
                    I am currently studying IT Business at Kyoto Computer
                    Gakuin, with a focus on web development and full-stack
                    engineering. My experience spans across frontend and backend
                    technologies, and I am continually expanding my skill set to
                    include new and emerging technologies.
                </p>
                <p>
                    In addition to my technical skills, I am fluent in Japanese,
                    Thai, and English, allowing me to communicate effectively in
                    international settings. I am also passionate about fashion,
                    which I believe enhances my creativity and eye for design.
                </p>
                <ul>
                    <li>
                        Currently exploring AI technologies to integrate into
                        web applications
                    </li>
                    <li>
                        Regularly participating in tech communities to stay
                        updated with industry trends
                    </li>
                    <li>
                        Interested in working in environments that promote
                        innovation and teamwork
                    </li>
                </ul>
            </DetailsSection>
        </AboutContainer>
    );
};

export default About;
