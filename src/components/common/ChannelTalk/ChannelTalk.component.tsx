import { useEffect, useState } from 'react';
import ChannelService from '@/utils/services/ChannelService';
import { useDetectViewPort } from '@/hooks';
import { useRouter } from 'next/router';
import { PATH_NAME } from '@/constants';

const ChannelTalk = () => {
  const [channelServiceInstance, setChannelServiceInstance] = useState<any>(null);
  const router = useRouter();
  const { size } = useDetectViewPort();

  useEffect(() => {
    setChannelServiceInstance(new ChannelService());
  }, []);

  useEffect(() => {
    channelServiceInstance?.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN,
    });
  }, [channelServiceInstance]);

  useEffect(() => {
    if (router.pathname === PATH_NAME.RECRUIT_PAGE && size === 'mobile') {
      channelServiceInstance?.hideChannelButton();
    } else {
      channelServiceInstance?.showChannelButton();
    }
  }, [channelServiceInstance, router.pathname, size]);

  return null;
};

export default ChannelTalk;
