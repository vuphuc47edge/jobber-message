import { config } from '@chat/config';
import { Client } from '@elastic/elasticsearch';
import { ClusterHealthHealthResponseBody } from '@elastic/elasticsearch/lib/api/types';
import { winstonLogger } from '@vuphuc47edge/jobber-shared';
import { Logger } from 'winston';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'ChatServiceElasticSearch', 'debug');

export const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`
});

export const checkConnection = async (): Promise<void> => {
  let isConnected = false;

  while (!isConnected) {
    try {
      const health: ClusterHealthHealthResponseBody = await elasticSearchClient.cluster.health({});
      log.info(`ChatService ElasticSearch health status - ${health.status}`);
      isConnected = true;
    } catch (error) {
      log.log('ChatService checkConnection() method error:', error);
    }
  }
};
