// Simple in-memory rate limiter
// For production, consider using Redis or a third-party service

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 10 * 60 * 1000);

export interface RateLimitConfig {
  maxRequests: number; // Maximum number of requests
  windowMs: number; // Time window in milliseconds
}

export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 60 * 60 * 1000 } // 5 requests per hour
): { allowed: boolean; resetTime: number } {
  const now = Date.now();
  const record = store[identifier];

  // If no record exists or time window has passed, create new record
  if (!record || record.resetTime < now) {
    store[identifier] = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    return { allowed: true, resetTime: store[identifier].resetTime };
  }

  // Increment count
  record.count++;

  // Check if limit exceeded
  if (record.count > config.maxRequests) {
    return { allowed: false, resetTime: record.resetTime };
  }

  return { allowed: true, resetTime: record.resetTime };
}
