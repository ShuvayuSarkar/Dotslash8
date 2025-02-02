# AI Dermatology Assistant 🏥

An AI-powered dermatological diagnostic tool that provides instant skin condition analysis through computer vision and natural language processing. Built to bridge healthcare gaps in tier 2 and tier 3 cities.

## 🚀 Features

- Real-time skin condition analysis through image upload or camera feed
- Voice-to-speech and text-to-speech interfaces for accessibility  
- Multi-language support
- Private and secure data handling
- Smart treatment recommendations
- Specialist referral system

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Database**: Neon DB (Serverless Postgres)
- **ORM**: Prisma
- **AI Models**: 
  - Gemini API for computer vision
  - Claude 3.5 Sonnet for NLP
- **Type Safety**: TypeScript

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-derm-assistant.git

# Install dependencies
cd ai-derm-assistant
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

## 🔑 Environment Variables

Create a `.env.local` file with the following:

```env
DATABASE_URL="your-neon-db-url"
GEMINI_API_KEY="your-gemini-api-key"
CLAUDE_API_KEY="your-claude-api-key"
```

## 📚 API Documentation

### Image Analysis Endpoint
```typescript
POST /api/analyze
Content-Type: multipart/form-data

{
  image: File,
  preferredLanguage?: string
}
```

### Voice Input Endpoint
```typescript
POST /api/transcribe
Content-Type: audio/wav

{
  audio: File,
  preferredLanguage?: string
}
```

## 🔒 Security

- All medical data is encrypted at rest
- Images are processed in-memory and not stored permanently
- HIPAA compliance guidelines followed
- Regular security audits performed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to Anthropic and Google for providing AI APIs
- Healthcare professionals who provided guidance
- Open source community for various tools and libraries used

## 📞 Support

For support, email support@ai-derm-assistant.com or open an issue in the repository.
