import { IConversationDocument } from '@vuphuc47edge/jobber-shared';
import { Model, Schema, model } from 'mongoose';

const conversationSchema: Schema = new Schema({
  conversationId: { type: String, required: true, unique: true, index: true },
  senderUsername: { type: String, required: true, index: true },
  receiverUsername: { type: String, required: true, index: true }
});

export const ConversationModel: Model<IConversationDocument> = model<IConversationDocument>(
  'Conversation',
  conversationSchema,
  'Conversation'
);
