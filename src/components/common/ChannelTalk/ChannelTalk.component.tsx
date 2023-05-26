import { useEffect, useState } from 'react';
import ChannelService from '@/utils/services/ChannelService';

const ChannelTalk = () => {
  const [channelServiceInstance, setChannelServiceInstance] = useState<any>(null);

  useEffect(() => {
    setChannelServiceInstance(new ChannelService());
  }, []);

  useEffect(() => {
    channelServiceInstance?.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN,
    });
  }, [channelServiceInstance]);

  return null;
};

export default ChannelTalk;
