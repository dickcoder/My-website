"use client";

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTiktok, SiBilibili, SiXiaohongshu, SiNextdotjs, SiTailwindcss, SiMongodb, SiReact, SiClerk } from "react-icons/si";
import Footer from '@/components/Footer';
import { useState } from 'react';
import TypingAnimation from '@/components/ui/typing-animation';
import { motion } from 'framer-motion';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="w-full h-full">
      <section className="text-center h-screen w-full">
        <iframe src='https://my.spline.design/boxeshover-f3ef960a4e5c86a64152d0160fa10c8a/' frameBorder='0' width='100%' height='100%'></iframe>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <h1 className="josefin-sans-bold text-hero leading-none">Hello, I'm QIU</h1>
          <TypingAnimation 
            texts={[
              "<Engineer />",
              "<Designer />",
              "<Creator />",
              "<Traveler />",
              "<Photographer />",
              "<Gamer />",
              "<Cat Lover />",
              "<Coffee Lover />",
            ]}
            className="roboto-mono-regular text-6xl py-6"
            typingSpeed={50}
            deletingSpeed={20}
            delayBetweenTexts={2000}
          />
          <p className="pt-sans-regular text-4xl py-6">Explore my thoughts, experiences, and creations.</p>
          
          <div className="flex gap-8 mt-8 pointer-events-auto">
            <a href="https://github.com/dickcoder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaGithub size={32} />
            </a>
            
            
            <a href="#" 
              className="group relative hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                copyText('qhwtom@foxmail.com');
              }}
            >
              <MdEmail size={32} />
              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 
                            transition-all duration-300 ease-in-out
                            group-hover:translate-y-0 group-hover:opacity-100 
                            h-auto w-auto rounded-full bg-slate-400 backdrop-blur-md flex flex-col text-white
                            hover:bg-slate-500 pointer-events-none">
                <span className="josefin-sans-regular px-6 py-4 text-4xl">
                  {copied ? 'Copied!' : 'qhwtom@foxmail.com'}
                </span>
              </div>
            </a>
            
            
            {/* 抖音二维码弹出层 */}
            <a href="https://v.douyin.com/iDSFCtjF/" target="_blank" rel="noopener noreferrer" className="group relative hover:text-gray-300 transition-colors">
              <SiTiktok size={32} />
              {/* 抖音二维码弹出层 */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out pointer-events-none
                              group-hover:translate-y-0 group-hover:opacity-100 
                              h-64 w-56 rounded-2xl bg-slate-400 backdrop-blur-md flex flex-col">                  
                <span className="text-white pt-sans-regular text-3xl leading-normal">Click or scan</span>
                <img 
                  src="/images/QR/dy.png" 
                  alt="抖音二维码" 
                  className="w-48 h-48 object-cover mx-auto"
                />
              </div>
            </a>
            {/* 哔哩哔哩二维码弹出层 */}
            <a href="https://space.bilibili.com/46578266" target="_blank" rel="noopener noreferrer" className="group relative hover:text-gray-300 transition-colors">
              <SiBilibili size={32} />
              {/* 二维码弹出层 */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out pointer-events-none
                              group-hover:translate-y-0 group-hover:opacity-100 
                              h-64 w-56 rounded-2xl bg-slate-400 backdrop-blur-md flex flex-col">                  
                <span className="text-white pt-sans-regular text-3xl leading-normal">Click or scan</span>
                <img 
                  src="/images/QR/bilibili.jpg" 
                  alt="哔哩哔哩二维码" 
                  className="w-48 h-48 object-cover mx-auto"
                />
              </div>
            </a>
            {/* 小红书二维码弹出层 */}
            <a href="https://www.xiaohongshu.com/user/profile/58f25ae482ec3902b9129722" target="_blank" 
            className="group relative hover:text-gray-300 transition-colors">
              <SiXiaohongshu size={32} />
              {/* 二维码弹出层 */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out pointer-events-none
                              group-hover:translate-y-0 group-hover:opacity-100 
                              h-64 w-56 rounded-2xl bg-slate-400 backdrop-blur-md flex flex-col">                  
                <span className="text-white pt-sans-regular text-3xl leading-normal">Click or scan</span>
                <img 
                  src="/images/QR/xhsewm.png" 
                  alt="小红书二维码" 
                  className="w-48 h-48 object-cover mx-auto"
                />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="py-24 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="josefin-sans-bold text-6xl font-bold mb-12 text-center">
              Tech Stacks
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {/* React */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <SiReact className="w-12 h-12 text-blue-400 animate-spin-slow" />
                <div>
                  <h3 className="text-xl font-semibold">React</h3>
                  <p className="text-gray-400">UI Framework</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Components, Hooks, Virtual DOM
              </div>
            </motion.div>
            {/* Next.js */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <SiNextdotjs className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold">Next.js</h3>
                  <p className="text-gray-400">React Framework</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                App Router, Server Components, API Routes
              </div>
            </motion.div>
            {/* Tailwind CSS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <SiTailwindcss className="w-12 h-12 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                  <p className="text-gray-400">Utility-first CSS</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Responsive Design, Custom Animations
              </div>
            </motion.div>
            {/* MongoDB */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <SiMongodb className="w-12 h-12 text-green-500" />
                <div>
                  <h3 className="text-xl font-semibold">MongoDB</h3>
                  <p className="text-gray-400">NoSQL Database</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Atlas Cloud, Mongoose ODM, CRUD Operations
              </div>
            </motion.div>
            {/* Clerk */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <SiClerk className="w-12 h-12 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold">Clerk</h3>
                  <p className="text-gray-400">Authentication</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                User Auth, Social Login, Security
              </div>
            </motion.div>
            {/* Sealos DevBox */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <img src="/images/sealos.png" className="w-12 h-12 pointer-events-none" />
                <div>
                  <h3 className="text-xl font-semibold">Sealos Cloud</h3>
                  <p className="text-gray-400">Cloud DevBox</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Cloud Development, Container Runtime, K8s
              </div>
            </motion.div>
            {/* Cursor */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <img src="https://www.cursor.com/assets/videos/logo/placeholder-logo.webp" className="w-12 h-12 pointer-events-none" />
                <div>
                  <h3 className="text-xl font-semibold">Cursor</h3>
                  <p className="text-gray-400">AI-Powered IDE</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Code Completion, AI Assistant, Smart Refactoring
              </div>
            </motion.div>
            {/* V0 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <img src="https://v0.dev/assets/icon-dark-32x32.png" className="w-12 h-12 pointer-events-none" />
                <div>
                  <h3 className="text-xl font-semibold">V0</h3>
                  <p className="text-gray-400">AI Development</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                AI Code Generation, Pair Programming
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* 关于我 */}
      <section className="py-24 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h2 className="josefin-sans-bold text-6xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 左侧：个人介绍 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed">
                你好！我是一名全栈开发者，热衷于探索新技术和创造有趣的数字体验。
              </p>
              <p className="text-xl leading-relaxed">
                💻 我专注于 Web 开发，特别是 React 生态系统。喜欢将设计和技术结合，创造出既美观又实用的应用。
              </p>
              <p className="text-xl leading-relaxed">
                📸 业余时间，我喜欢摄影、旅行，记录生活中的美好瞬间。同时也是一个咖啡爱好者和猫咪铲屎官。
              </p>
              <p className="text-xl leading-relaxed">
                🎮 作为一个游戏玩家，我也热衷于探索游戏开发和交互设计的可能性。
              </p>
            </motion.div>

            {/* 右侧：兴趣和技能标签 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">兴趣爱好</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full">摄影</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full">旅行</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full">咖啡</span>
                  <span className="px-3 py-1 bg-red-500/20 rounded-full">猫咪</span>
                  <span className="px-3 py-1 bg-yellow-500/20 rounded-full">游戏</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">专业技能</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full">Web 开发</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full">UI 设计</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full">3D 模型</span>
                  <span className="px-3 py-1 bg-red-500/20 rounded-full">动画制作</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">正在学习</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full">AI 开发</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full">游戏开发</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full">云原生</span>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">未来计划</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full">开源贡献</span>
                  <span className="px-3 py-1 bg-green-500/20 rounded-full">技术分享</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full">创业</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* 最新文章 */}
      <section className="py-24">
        <h2 className="text-3xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((post) => (
            <Card key={post}>
              <CardHeader>
                <CardTitle>Blog Post Title {post}</CardTitle>
                <CardDescription>Posted on June {post}, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a brief excerpt from the blog post...</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/blog/${post}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* 精选照片 */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Featured Photos</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((photo) => (
            <div key={photo} className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`/placeholder.svg?height=400&width=400`}
                alt={`Featured photo ${photo}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 最近旅行 */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Recent Travels</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((travel) => (
            <Card key={travel}>
              <CardHeader>
                <CardTitle>Travel Destination {travel}</CardTitle>
                <CardDescription>Visited in May 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A brief description of the travel experience...</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={`/travel/${travel}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <Footer />
    </div>
  )
}

