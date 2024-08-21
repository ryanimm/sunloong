'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Flame, Zap, Coins } from "lucide-react"

export default function Component(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-400 to-red-500">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="flex items-center justify-center" href="#">
            <span className="text-2xl mr-2">🐉</span>
            <span className="text-2xl font-bold text-white">Sunloong</span>
          </Link>
        </motion.div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#how-to-buy">
            How to Buy
          </Link>
        </nav>
      </header>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Unleash the <span className="text-yellow-300">Sunloong</span> Dragon! 🐉
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-white">
                The hottest memecoin on the Tron network! 🔥🐉
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">Buy Now</Button>
              <Button size="lg" variant="outline" className="bg-white text-red-500 border-white hover:bg-red-50">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <main className="flex-1">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          id="features" 
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-red-600">
              Sunloong Superpowers 🐉
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 bg-orange-100 p-6 rounded-xl shadow-lg"
              >
                <Flame className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold text-red-600">Blazing Fast</h3>
                <p className="text-sm text-gray-600 text-center">
                  Zoom through transactions at dragon speed! 🚀
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 bg-orange-100 p-6 rounded-xl shadow-lg"
              >
                <Zap className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-yellow-600">Electrifying Community</h3>
                <p className="text-sm text-gray-600 text-center">
                  Join the most energetic crypto fam! ⚡
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 bg-orange-100 p-6 rounded-xl shadow-lg"
              >
                <Coins className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold text-green-600">Moon-Bound Tokenomics</h3>
                <p className="text-sm text-gray-600 text-center">
                  Watch your Sunloong stash skyrocket! 🌙
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        <section id="how-to-buy" className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-red-600">
              How to Catch Your Dragon 🐉
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-red-600">1. Summon Your Tron Wallet</h3>
                <p className="text-gray-600">
                  Equip yourself with a magical Tron wallet like TronLink. 🧙‍♂️
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-yellow-600">2. Gather TRX Treasure</h3>
                <p className="text-gray-600">
                  Acquire TRX from your favorite crypto treasure chest. 💰
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-green-600">{"3. Enter the Dragon's Lair (DEX)"}</h3>
                <p className="text-gray-600">
                  Venture into a DEX where Sunloong dragons roam free. 🐉
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-purple-600">4. Perform the Sunloong Ritual</h3>
                <p className="text-gray-600">
                  Swap your TRX for Sunloong and watch your dragon soar! 🚀
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="w-full py-6 bg-red-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <span className="text-2xl">🐉</span>
              <p className="text-center text-sm leading-loose md:text-left">
                © 2024 Sunloong. All rights reserved. Ride the dragon responsibly! 🐉
              </p>
            </div>
            <div className="flex gap-4">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}