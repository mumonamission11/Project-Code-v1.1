import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Sparkles, Rocket } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" />
            Welcome to Your New Project
            <Sparkles className="text-blue-500" />
          </h1>
          <p className="text-xl text-gray-600">
            A modern React + TypeScript + Tailwind CSS starter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="text-green-500" />
                Ready to Build
              </CardTitle>
              <CardDescription>
                Your project is set up with modern tools and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ React 18 with TypeScript</li>
                <li>✅ Tailwind CSS for styling</li>
                <li>✅ Vite for fast development</li>
                <li>✅ shadcn/ui components</li>
                <li>✅ Path aliases configured</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-red-500" />
                Interactive Demo
              </CardTitle>
              <CardDescription>
                Click the button to see React state in action
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4">
                <span className="text-2xl font-bold text-blue-600">{count}</span>
                <p className="text-sm text-gray-500">Button clicks</p>
              </div>
              <Button 
                onClick={() => setCount(count + 1)}
                className="w-full"
              >
                Click me! 🚀
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
            <CardDescription className="text-purple-100">
              Start building your amazing application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">🎨 Customize</h4>
                <p className="text-purple-100">
                  Modify the design, add your branding, and make it yours
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔧 Add Features</h4>
                <p className="text-purple-100">
                  Install additional packages and build new functionality
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🚀 Deploy</h4>
                <p className="text-purple-100">
                  Deploy to Vercel, Netlify, or your preferred platform
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App