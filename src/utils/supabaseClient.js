import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lklymebmmlchguxqlmit.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrbHltZWJtbWxjaGd1eHFsbWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MTg1NTksImV4cCI6MjEwNzQ5NDU1OX0.CNiFO_gljV8cJsgc8RZxc9-6YElPb-mslnzTKc7Sph0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
