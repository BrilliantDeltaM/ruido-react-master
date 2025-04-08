import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://agkbtabptdjpfdnnqgls.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFna2J0YWJwdGRqcGZkbm5xZ2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDczODYsImV4cCI6MjA1NzkyMzM4Nn0.s5tNcEv47QIc51Tn4jZiRAyyBNH_YewSdJgfXnBSQsk'; 
export const supabase = createClient(supabaseUrl, supabaseKey);