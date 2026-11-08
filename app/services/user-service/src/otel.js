const endpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;

if (endpoint) {
  const { NodeSDK } = require('@opentelemetry/sdk-node');
  const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
  const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
  const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-http');
  const { BatchLogRecordProcessor } = require('@opentelemetry/sdk-logs');

  const sdk = new NodeSDK({
    serviceName: process.env.OTEL_SERVICE_NAME || 'user-service',
    traceExporter: new OTLPTraceExporter({ url: `${endpoint}/v1/traces` }),
    logRecordProcessor: new BatchLogRecordProcessor(
      new OTLPLogExporter({ url: `${endpoint}/v1/logs` })
    ),
    instrumentations: [getNodeAutoInstrumentations()],
  });

  sdk.start();
}
