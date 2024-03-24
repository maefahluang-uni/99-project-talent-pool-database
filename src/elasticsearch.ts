import { Client } from '@elastic/elasticsearch';

const esClient = new Client({ node: 'http://localhost:9200' }); // Adjust URL as per your Elasticsearch configuration

export default esClient;
