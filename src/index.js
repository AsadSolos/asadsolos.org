export default {
  async fetch(request, env, ctx) {
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>asadsolos.org</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 60px 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #fff, #f0f0f0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .subtitle {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 40px;
            color: #f8f9fa;
        }
        
        .message {
            font-size: 1.8rem;
            line-height: 1.6;
            margin-bottom: 30px;
            color: #e9ecef;
        }
        
        .signature {
            font-size: 2rem;
            font-weight: 700;
            color: #ffd166;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .emoji {
            font-size: 3rem;
            margin: 30px 0;
            display: block;
        }
        
        .construction-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 3rem;
            }
            
            .subtitle {
                font-size: 2rem;
            }
            
            .message {
                font-size: 1.5rem;
            }
            
            .container {
                padding: 40px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="construction-icon">🛠️</div>
        <h1>UNDER NEW MANAGEMENT</h1>
        <div class="subtitle">Coming Soon (still)</div>
        <div class="message">
            yo asad, i changed your front page :P
            <br>nice repo btw
        </div>
        <span class="emoji">😎</span>
        <div class="signature">- nick</div>
    </div>
</body>
</html>`;