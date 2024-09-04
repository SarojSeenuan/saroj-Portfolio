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
    background: #2e2e2e;
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
            line-height: 1.6;
        }
    }
`;

const QuoteSection = styled.div`
    margin-bottom: 50px;
    font-style: italic;
    font-size: 1.5rem;
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

const ContactSection = styled.div`
    text-align: center;
    margin-top: 50px;

    h3 {
        margin-bottom: 20px;
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
    }

    button {
        background: #f0a500;
        color: #2e2e2e;
        padding: 10px 20px;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;

        &:hover {
            background: #cc8500;
        }
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <ProfileSection>
                <img src="/asset/img/saroj.jpg" alt="シヌアン サロード" />
                <div>
                    <h2>シヌアン サロード</h2>
                    <p>
                        こんにちは！私はシヌアン
                        サロードです。情熱を持って最新のWeb技術を学び、常に進化し続けるフルスタック開発者です。ユーザーに優れた体験を提供するため、ダイナミックでレスポンシブなWebアプリケーションの作成に力を入れています。
                    </p>
                </div>
            </ProfileSection>

            <QuoteSection>
                「一行のコードから、革新と優れたものを追求しています。」
            </QuoteSection>

            <SkillsSection>
                <h3>スキル</h3>
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
                <h3>私についてもっと知る</h3>
                <p>
                    現在、京都コンピュータ学院でITビジネスを専攻し、Web開発とフルスタックエンジニアリングに焦点を当てています。フロントエンドからバックエンドまで幅広い技術に対応でき、常に新しい技術を取り入れてスキルを向上させることを心がけています。
                </p>
                <p>
                    技術スキルに加えて、日本語、タイ語、英語に堪能で、国際的な環境でのコミュニケーションにも自信があります。また、ファッションにも情熱を持っており、その創造力はデザインの観点からも役立っています。
                </p>
                <ul>
                    <li>AI技術をWebアプリケーションに統合することを探求中</li>
                    <li>
                        業界のトレンドに常に敏感で、テックコミュニティに積極的に参加
                    </li>
                    <li>
                        イノベーションとチームワークを促進する環境で働くことに関心あり
                    </li>
                </ul>
            </DetailsSection>

            <ContactSection>
                <h3>お問い合わせ</h3>
                <p>
                    ご質問やプロジェクトの相談がございましたら、ぜひご連絡ください。
                </p>
                <button
                    onClick={() => alert('お問い合わせありがとうございます！')}
                >
                    お問い合わせ
                </button>
            </ContactSection>
        </AboutContainer>
    );
};

export default About;
