'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: 600, md: 900 },
        mx: 'auto',
        p: { xs: 3, sm: 5, md: 8 }, // 全体パディングを少し広めに
      }}
    >
      {/* メインビジュアル */}
      <Box
        sx={{
          mt: { xs: 6, md: 10 }, // 上マージンを広めに
          p: { xs: 4, sm: 5, md: 8 }, // 内側余白を広め
          borderRadius: 4,
          boxShadow: 2,
          bgcolor: '#f0f0f0',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          エコ
        </Typography>
        <Typography variant="h6" sx={{ my: 1 }}>×</Typography> {/* ×の上下に少し余白 */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block',
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          見る
          {/* 🔍マーク */}
          <Box
            component="span"
            sx={{
              position: 'absolute',
              right: { xs: -10, md: -15 },
              top: { xs: 4, md: 6 },
              fontSize: { xs: '1.4rem', md: '1.8rem' },
            }}
          >
            🔍
          </Box>
        </Typography>
      </Box>

      {/* ボタン */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 }, // メインビジュアルとの間隔を広め
          display: 'flex',
          flexDirection: 'column',
          gap: 4, // ボタン間隔を広めに
          alignItems: 'center',
        }}
      >
        <Button
          component={Link}
          href="　" // 遷移先
          variant="contained"
          sx={{
            bgcolor: '#AFE0D1',
            color: 'white',
            borderRadius: 999,
            px: { xs: 5, md: 7 }, // 横パディング少し広め
            py: { xs: 2, md: 2.5 }, // 縦パディング少し広め
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            '&:hover': { bgcolor: '#8ccfbf' },
            width: { xs: '80%', sm: '60%', md: '40%' },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            商品を探す
          </Box>
          <Box
            component="span"
            sx={{
              position: 'absolute',
              right: 16,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            🔍
          </Box>
        </Button>

        <Button
          component={Link}
          href="　" // 遷移先
          variant="contained"
          sx={{
            bgcolor: '#AFE0D1',
            color: 'white',
            borderRadius: 999,
            px: { xs: 5, md: 7 },
            py: { xs: 2, md: 2.5 },
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            '&:hover': { bgcolor: '#8ccfbf' },
            width: { xs: '80%', sm: '60%', md: '40%' },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            商品を比較
          </Box>
          <Box
            component="span"
            sx={{
              position: 'absolute',
              right: 16,
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            🔍
          </Box>
        </Button>
      </Box>

      {/* 説明文＋右側十字 */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          mt: { xs: 8, md: 12 }, // ボタンとの間隔を広め
          mx: 1,
        }}
      >
        {/* 説明文 */}
        <Box sx={{ flex: 1, pr: { xs: 8, md: 14 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2, // 上下余白を少し広め
              fontSize: { xs: '1rem', md: '1.3rem' },
            }}
          >
            | 比較、選択。
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
            食品のエコ度・健康度を
            <span style={{ color: 'red' }}>ひと目で比較。</span>
            体にも環境にもより良い、やさしい食品選びをサポートします。
          </Typography>
        </Box>

        {/* 十字デザイン */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: -30, md: -50 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: 80, md: 120 },
            height: { xs: 80, md: 120 },
          }}
        >
          {/* 横線 */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: 2,
              bgcolor: 'black',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* 縦線 */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 2,
              height: '100%',
              bgcolor: 'black',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* ドット（青） */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: 20,
              width: { xs: 6, md: 8 },
              height: { xs: 6, md: 8 },
              borderRadius: '50%',
              bgcolor: '#66c2ff',
            }}
          />
          {/* ドット（赤） */}
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 20,
              width: { xs: 6, md: 8 },
              height: { xs: 6, md: 8 },
              borderRadius: '50%',
              bgcolor: '#ff99aa',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
