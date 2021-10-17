FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . ./


ENV MONGO_URL = "mongodb+srv://mandavi:mandavi@zomato-master.mjkbv.mongodb.net/zomato?retryWrites=true&w=majority"
ENV GOOGLE_CLIENT_ID = 184771164411-ird0utu9ckckodkkhlktsu8e82aou84e.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET = 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
ENV AWS_S3_ACCESS_KEY = AKIASKYIZAARMUQFK4EW
ENV AWS_S3_SECRET_KEY = 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
ENV RZR_PAY_ID = rzp_test_82wQxgjuwbpsJF
ENV RXR_PAY_SECRET = UrAINIaquJqGNOWfSQcz3pBa
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build


CMD ["npm", "run", "start"]