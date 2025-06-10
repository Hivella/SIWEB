import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fgxmuxleojpczucakxcr.supabase.co'; // Replace with your Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZneG11eGxlb2pwY3p1Y2FreGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NjMyNzksImV4cCI6MjA2NTAzOTI3OX0.OMzq8ea_zIIq8TTZRSgLs6AtLxBpP2V4xIN8I2i0EcA'; // Get this from the API Keys section

export const supabase = createClient(supabaseUrl, supabaseAnonKey);