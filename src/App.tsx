import { useState, useEffect } from "react";

const PROFILE = {
    name: "Kyo",
    handle: "Kyo-page",
    intro: "デザイナー / コーダーです。<br>Reactを中心にモダンなWebフロントエンドを学習中。",
    avatar: null as string | null,
    links: [
        { label: "GitHub", href: "https://github.com/Kyo-page", icon: "GitHub" },
        { label: "Twitter", href: "https://x.com/kyo__web", icon: "Twitter" },
    ],
    skills: ["HTML", "CSS", "WordPress", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
};

function App() {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDark(isDark);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        document.documentElement.classList.toggle("dark", dark);
    }, [dark, mounted]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            {/* 背景のグラデーションオーブ */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 dark:bg-primary/15 rounded-full blur-3xl animate-float" />
                <div
                    className="absolute top-1/2 -left-40 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/25 dark:bg-primary/10 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <main
                className="relative w-full max-w-lg animate-fade-in opacity-0"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
                {/* グラスモーフィズムカード */}
                <article className="glass-panel rounded-3xl p-8 md:p-10 shadow-xl border border-white/40 dark:border-white/10">
                    {/* ダークモードトグル */}
                    <div className="absolute top-4 right-4">
                        <button
                            type="button"
                            onClick={() => setDark((d) => !d)}
                            className="p-2 rounded-xl bg-white/60 dark:bg-white/10 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/20 transition-colors border border-white/40 dark:border-white/20"
                            aria-label={dark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
                        >
                            {dark ? (
                                <span className="text-xl" aria-hidden>
                                    ☀️
                                </span>
                            ) : (
                                <span className="text-xl" aria-hidden>
                                    🌙
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        {/* プロフィール画像（プレースホルダー） */}
                        <div
                            className="w-24 h-24 rounded-full mb-6 animate-fade-in-up opacity-0 flex items-center justify-center text-4xl overflow-hidden border-2 border-primary dark:border-primary"
                            style={{
                                background: "linear-gradient(135deg, #f9d2e8 0%, #8772c0 100%)",
                                animationDelay: "0.3s",
                                animationFillMode: "forwards",
                            }}
                        >
                            {PROFILE.avatar ? (
                                <img src={PROFILE.avatar} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-white/90 font-bold">{PROFILE.name.slice(0, 1)}</span>
                            )}
                        </div>

                        {/* 名前・ハンドルネーム */}
                        <h1
                            className="text-2xl md:text-3xl font-bold text-secondary-dark dark:text-white mb-1 animate-fade-in-up opacity-0"
                            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
                        >
                            {PROFILE.name}
                        </h1>
                        <p
                            className="text-secondary/80 dark:text-gray-400 text-sm mb-6 animate-fade-in-up opacity-0"
                            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
                        >
                            @{PROFILE.handle}
                        </p>

                        {/* 自己紹介文 */}
                        <p
                            className="text-secondary-dark/90 dark:text-gray-200 leading-relaxed mb-8 max-w-md animate-fade-in-up opacity-0"
                            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
                        >
                            {PROFILE.intro.split("<br>").map((line, i, arr) => (
                                <span key={i}>
                                    {line}
                                    {i < arr.length - 1 && <br />}
                                </span>
                            ))}
                        </p>

                        {/* スキル */}
                        <div
                            className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up opacity-0"
                            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                        >
                            {PROFILE.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm font-medium border border-primary/40 dark:border-white/20 bg-primary/20 dark:bg-white/10 text-secondary-dark dark:text-gray-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* SNSリンク */}
                        <div
                            className="flex gap-4 animate-fade-in-up opacity-0"
                            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
                        >
                            {PROFILE.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all hover:scale-105 active:scale-95 border border-secondary/30 dark:border-white/20 bg-gradient-to-r from-primary/30 to-secondary/20 dark:from-white/10 dark:to-white/5 text-secondary-dark dark:text-gray-100 hover:shadow-lg hover:shadow-secondary/20 dark:hover:bg-white/10"
                                >
                                    <span className="sr-only">{link.label}</span>
                                    {link.icon === "GitHub" && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                    {link.icon === "Twitter" && (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    )}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            <footer
                className="relative mt-8 text-sm text-secondary/60 dark:text-gray-500 animate-fade-in opacity-0"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
            >
                Built with React + Vite + Tailwind CSS
            </footer>
        </div>
    );
}

export default App;
