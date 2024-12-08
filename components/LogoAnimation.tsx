import { useLottie } from 'lottie-react';
import { useEffect, useState } from 'react';
import animationData from '@/public/animations/logo.json';

export default function LogoAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  
  // 配置 Lottie 选项
  const options = {
    animationData,
    loop: false,
    autoplay: false,
  };

  // 使用 useLottie hook 获取动画控制器
  const { View, playSegments, goToAndStop } = useLottie(options);

  // 处理鼠标进入事件
  const handleMouseEnter = () => {
    setIsHovered(true);
    // 播放 0.5s 到 1.5s 的动画
    playSegments([30, 60], true); // 我的帧率为 60fps，根据实际调整帧数
  };

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    setIsHovered(false);
    // 播放回初始状态
    playSegments([60, 30], true); // 反向播放回初始状态
  };

  // 初始化时停在第一帧
  useEffect(() => {
    goToAndStop(1, true);
  }, []);

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full cursor-pointer"
    >
      {View}
    </div>
  );
} 